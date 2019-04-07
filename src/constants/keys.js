const genRandom = () => Math.random().toString(36).substring(10)

const SORT_BY       = 'SORT_BY' + genRandom()
const ORDER_BY      = 'ORDER_BY' + genRandom()

const FROM_STATION  = 'FROM_STATION' + genRandom()
const TO_STATION    = 'TO_STATION' + genRandom()
const STATIONS      = 'STATIONS' + genRandom()

const ARRIVAL         = 'ARRIVAL' + genRandom()
const DEPARTURE       = 'DEPARTURE' + genRandom()
const SMALL_TRANSFER  = 'SMALL_TRANSFER' + genRandom()
const DURATION        = 'DURATION' + genRandom()
const FARE            = 'FARE' + genRandom()
const FIRST           = 'FIRST' + genRandom()
const LAST            = 'LAST' + genRandom()

const DEPARTURE_DATE  = 'DEPARTURE_DATE' + genRandom()
const TODAY           = 'TODAY' + genRandom()
const TOMORROW        = 'TOMORROW' + genRandom()

const ORIGINAL_SCHEDULES = 'ORIGINAL_SCHEDULES' + genRandom()
const SCHEDULES          = 'SCHEDULES' + genRandom()

const FARES              = 'FARES' + genRandom()

const SELECTED_FILTERS = 'SELECTED_FILTERS' + genRandom()
const SELECTED_FILTER = 'SELECTED_FILTER' + genRandom()
const WHEEL_CHAIR     = 'WHEEL_CHAIR' + genRandom()
const BIKE_SPACE      = 'BIKE_SPACE' + genRandom()
const NURSING_ROOM    = 'NURSING_ROOM' + genRandom()

const TRAIN_TYPE      = 'TRAIN_TYPE' + genRandom()
const LIMITED_EXPRESS = 'LIMITED_EXPRESS' + genRandom()
const EXPRESS         = 'EXPRESS' + genRandom()
const SEMI_EXPRESS    = 'SEMI_EXPRESS' + genRandom()

const KEYS = Object.freeze({
    sortBy        : SORT_BY,
    orderBy       : ORDER_BY,

    fromStation   : FROM_STATION,
    toStation     : TO_STATION,
    stations      : STATIONS,

    departure     : DEPARTURE,
    arrival       : ARRIVAL,
    fare          : FARE,
    smallTransfer : SMALL_TRANSFER,
    duration      : DURATION,
    first         : FIRST,
    last          : LAST,

    departureDate : DEPARTURE_DATE,
    today         : TODAY,
    tomorrow      : TOMORROW,

    originalSchedules : ORIGINAL_SCHEDULES,
    schedules         : SCHEDULES,

    fares           : FARES,

    selectedFilters : SELECTED_FILTERS,
    selectedFilter  : SELECTED_FILTER,
    wheelChair      : WHEEL_CHAIR,
    bikeSpace       : BIKE_SPACE,
    nursingRoom     : NURSING_ROOM,

    trainType      : TRAIN_TYPE,
    limitedExpress : LIMITED_EXPRESS,
    express        : EXPRESS,
    semiExpress    : SEMI_EXPRESS,
})

export default KEYS

