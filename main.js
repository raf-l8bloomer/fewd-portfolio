

const time = document.getElementById('time');

function updateDateTime() {
    const date = new Date();
    const currentDateTime = date.toLocaleString();
    time.innerHTML = currentDateTime;
}

setInterval(updateDateTime, 1000);




