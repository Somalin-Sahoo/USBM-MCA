//function update clock() {


function updateClock() {
    const clock = document.getElementById("clock");

    const now = new Date();

    let hour = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    clock.textContent = `${hour}:${minutes}:${seconds}:`;
}

setInterval(updateClock,1000);
