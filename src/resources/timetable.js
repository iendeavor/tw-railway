import { getTrainTypeName, getTrainTypeID } from './train_type'

export const getTimetable = (from, to, on) => {
    const yyyymmdd = on.toISOString().slice(0, 10)

    return new Promise((success, error) => {
        let request = new XMLHttpRequest()
        request.onload = () => {
            if (request.status === 200) {
                const timetable = JSON.parse(request.responseText)
                const formattedTimetable = formatTimetable(timetable)
                success(formattedTimetable)
            }
        }
        request.open('GET', getTimetableURL(from, to, yyyymmdd), true)
        request.send()
    })
}

const getTimetableURL = (from, to, on) => {
    return ('https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/OD/' +
            from +
            '/to/' +
            to +
            '/' +
            on +
            '?format=JSON')
}

const calcDuration = pair => {
    const departure = pair.OriginStopTime.DepartureTime
    const arrival = pair.DestinationStopTime.ArrivalTime
    const departure_minute = parseInt(departure.slice(0, 2)) * 60 + parseInt(departure.slice(3, 5))
    let arrival_minute = parseInt(arrival.slice(0, 2)) * 60 + parseInt(arrival.slice(3, 5))
    if (departure_minute > arrival_minute) {
        arrival_minute += 24 * 60
    }
    const duration_minute = (arrival_minute - departure_minute) % 60
    const duration_hour = parseInt((arrival_minute - departure_minute) / 60)
    return (String(duration_hour).padStart(2, '0') +
            ':' +
            String(duration_minute).padStart(2, '0'))
}

const formatTimetable = timetable => {
    return timetable.map(pair => {
        return {
            number: pair.DailyTrainInfo.TrainNo,
            fromID: pair.OriginStopTime.StationID,
            toID: pair.DestinationStopTime.StationID,
            from: pair.OriginStopTime.StationName.En,
            to: pair.DestinationStopTime.StationName.En,
            duration: calcDuration(pair),
            departure: pair.OriginStopTime.DepartureTime,
            arrival: pair.DestinationStopTime.ArrivalTime,
            has_wheel_chair: pair.DailyTrainInfo.WheelchairFlag === 1,
            has_nursing_room: pair.DailyTrainInfo.BreastFeedingFlag === 1,
            is_bike_allowed: pair.DailyTrainInfo.BikeFlag === 1,
            train_type_name: getTrainTypeName(pair.DailyTrainInfo.TrainTypeID),
            train_type: getTrainTypeID(pair.DailyTrainInfo.TrainTypeID),
            note: pair.DailyTrainInfo.Note.Zh_tw,
        }
    })
}

