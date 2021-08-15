// const filename = process.argv[2];

const CAPACITY_TABLE = {
    "c_cave": 3,
    "d_tower": 7,
    "g_mansion": 20,
}

const BUFFER_TIME = ["9:00-9:15", "13:15-13:45", "18:45-19:00"]

function timeParser(time) {
    var hour = parseInt(time.split(":")[0])
    var min = parseInt(time.split(":")[1])
    return { hour, min }
}

function singleDayCheck(fromTime, toTime) {
    var startTime = timeParser(fromTime)
    var endTime = timeParser(toTime)

    if (startTime.min % 15 === 0 || endTime.min % 15 === 0) {
        if (endTime.hour > startTime.hour) {
            return true;
        } else if (endTime.hour === startTime.hour && endTime.min > startTime.min) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }


}
const bookingMap = {}
function buildTimeMap() {

    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 4; j++) {

            if ((j + 1) * 15 === 60) {
                bookingMap[`${i}:${j * 15}-${i + 1}:00`] = false;
            } else if (j * 15 === 0) {
                bookingMap[`${i}:00-${i + 1}:00`] = false;
            } else {
                bookingMap[`${i}:${j * 15}-${i}:${(j + 1) * 15}`] = false;
            }
        }
    }
}
// console.log(timeParser("9:00"))
// console.log(singleDayCheck("9:00","9:30"))
// console.log(singleDayCheck("19:00","19:30"))
// console.log(singleDayCheck("9:40","9:50"))

function updateTimeMap(gap) {
    bookingMap[gap] = true
}

function checkTimeMapForDuration(fromTime, toTime) {
    //given the start and end time - find all the gaps. and if all the gaps are false, then update it.
    var startTime = timeParser(fromTime)
    var endTime = timeParser(toTime)

    var hourDiff = endTime.hour - startTime.hour;
    var minDiff = endTime.min - startTime.min
    console.log("hourDiff", hourDiff)
    console.log("hourDiff", minDiff)

    var gaps = []

    for (var i = 0; i < (hourDiff * 4) + (minDiff / 15); i++) {
        // console.log(`${startTime.hour+Math.floor(i/4)}:${startTime.min+((i)/4 * 60)}`)
        let startHourValue = startTime.hour + Math.floor(i / 4);
        let startMinValue = startTime.min + i * 15;
        if (startMinValue % 60 === 0) {
            // console.log(`${startHourValue+1}:00`)
            gaps.push(`${startHourValue+1}:00-${startHourValue+1}:15`)
        } else {
            // console.log(`${startHourValue}:${startMinValue % 60}`)
            gaps.push(`${startHourValue}:${startMinValue % 60}-${startHourValue}:${startMinValue % 60}`)
        }

        
    }

    console.log(gaps)

}


buildTimeMap()
console.log(bookingMap["21:00-22:00"])

updateTimeMap("21:00-22:00")

console.log(bookingMap["21:00-22:00"])

checkTimeMapForDuration("20:15", "23:15")