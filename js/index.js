
let seconds = 0
let minutes = 0
let hours = 0

document.querySelector('#sp1').innerText = '00:00:00'

setInterval(() => {
    if (seconds == 60) {
        seconds = 0
        minutes++
    }
    if (minutes == 60) {
        minutes = 0
        hours++
    }
    if (hours == 24) {
        hours = 0
    }
    document.querySelector('#sp1').innerText = formater(hours, minutes, seconds)
    seconds++
}, 1000)

function formater(hrs, mins, scs) {
    let result = ''
    // hours
    if (hrs < 10) {
        result = result + '0' + hrs.toString()
    } else {
        result = result + hrs.toString()
    }
    // minutes
    if (mins < 10) {
        result = result + ':0' + mins.toString()
    } else {
        result = result + ':' + mins.toString()
    }
    // seconds
    if (scs < 10) {
        result = result + ':0' + scs.toString()
    } else {
        result = result + ':' + scs.toString()
    }
    return result
}