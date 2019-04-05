import { FROM_STATION, TO_STATION, DEPARTURE, ARRIVAL, DURATION } from '../constants/keys'


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

const formatTimetable = timetable => {
    return timetable.map(pair => {
        return {
            [FROM_STATION]: pair.OriginStopTime.StationID,
            [TO_STATION]: pair.DestinationStopTime.StationID,
            [DEPARTURE]: pair.OriginStopTime.DepartureTime,
            [ARRIVAL]: pair.DestinationStopTime.ArrivalTime,
        }
    })
}

