import { LIMITED_EXPRESS, EXPRESS, SEMI_EXPRESS } from '../constants/train'

export const getFare = (from, to) => {
    return new Promise((success, error) => {
        let request = new XMLHttpRequest()
        request.onload = () => {
            if (request.status === 200) {
                const fare = JSON.parse(request.responseText)
                const formattedFare = formatFare(fare)
                success(formattedFare)
            }
        }
        request.open('GET', getFareURL(from, to), true)
        request.send()
    })
}

const getFareURL = (from, to) => {
    return ('https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/ODFare?$select=Fares&$filter=OriginStationID%20eq%20' +
        from +
        '%20and%20DestinationStationID%20eq%20' +
        to +
        '&$top=30&$format=JSON')
}

const formatFare = fare => {
    let res = {}
    for (let f of fare) {
        switch (f.TicketType) {
            case '成自':
                res[LIMITED_EXPRESS] = f.Price
                break
            case '成莒':
                res[EXPRESS] = f.Price
                break
            case '成普':
                res[SEMI_EXPRESS] = f.Price
                break
            default:
                break
        }
    }
    return res
}
