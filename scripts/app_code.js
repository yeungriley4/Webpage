function updateTime() {
    let today = new Date();
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    console.log(today, hours, minutes, seconds)
}

updateTime()