const SORT_BY       = 'SORT_BY'
const ORDER_BY      = 'ORDER_BY'

const FROM_STATION  = 'FROM_STATION'
const TO_STATION    = 'TO_STATION'
const STATIONS      = 'STATIONS'

const ARRIVAL         = 'ARRIVAL'
const DEPARTURE       = 'DEPARTURE'
const CHEAP_COST      = 'CHEAP_COST'
const SMALL_TRANSFER  = 'SMALL_TRANSFER'
const DURATION        = 'DURATION'
const FIRST           = 'FIRST'
const LAST            = 'LAST'

const DEPARTURE_DATE  = 'DEPARTURE_DATE'
const TODAY           = 'TODAY'
const TOMORROW        = 'TOMORROW'

const ORIGINAL_SCHEDULES = 'ORIGINAL_SCHEDULES'
const SCHEDULES        = 'SCHEDULES'

const SELECTED_FILTERS = 'SELECTED_FILTERS'
const SELECTED_FILTER = 'SELECTED_FILTER'
const WHEEL_CHAIR     = 'WHEEL_CHAIR'
const BIKE_SPACE      = 'BIKE_SPACE'
const NURSING_ROOM    = 'NURSING_ROOM'

const TRAIN_TYPE      = 'TRAIN_TYPE'
const LIMITED_EXPRESS = 'LIMITED_EXPRESS'
const EXPRESS         = 'EXPRESS'
const SEMI_EXPRESS    = 'SEMI_EXPRESS'

const KEYS = Object.freeze({
    sortBy        : SORT_BY,
    orderBy       : ORDER_BY,

    fromStation   : FROM_STATION,
    toStation     : TO_STATION,
    stations      : STATIONS,

    departure     : DEPARTURE,
    arrival       : ARRIVAL,
    cheapCost     : CHEAP_COST,
    smallTransfer : SMALL_TRANSFER,
    duration      : DURATION,
    first         : FIRST,
    last          : LAST,

    departureDate : DEPARTURE_DATE,
    today         : TODAY,
    tomorrow      : TOMORROW,

    originalSchedules : ORIGINAL_SCHEDULES,
    schedules         : SCHEDULES,

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

