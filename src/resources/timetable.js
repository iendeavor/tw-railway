export const getTimetable = (from, to, on) => {
    return new Promise(function(success, error) {
        let request = XMLHttpRequest()
        request.onload = () => {
            if (this.status === 200) {
                success(JSON.parse(this.responseText))
            } else {
                console.log(this)
            }
        }
        request.open('GET', getTimetableURL(from, to, on), true)
        request.send()
    })
}

const getTimetableURL = (from, to, on) => {
    console.log(from)
    console.log(to)
    console.log(on)
    return `https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/OD/{from}/to/{to}/{on}?$top=30&$format=JSON`
}

