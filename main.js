

const time = document.querySelector('#time');

function updateDateTime() {
    const date = new Date();
    const currentDateTime = date.toLocaleString();
    time.innerHTML = currentDateTime;
}

setInterval(updateDateTime, 1000);


const invert = document.querySelector('#invert');
const footer = document.querySelector('.footer');
const h1 = document.getElementsByTagName('h1');
const h2 = document.getElementsByTagName('h2');
const h3 = document.getElementsByTagName('h3')
const icons = document.getElementsByClassName('social');
const iconsArray = [...icons];
let headings = [];
headings = [...headings, ...h1, ...h2, ...h3];




invert.addEventListener('click', () => {
if (invert.checked) {
    console.log('checkbox works')

    document.body.style.backgroundColor = "#E43E22"
    footer.style.backgroundColor = "#E43E22"
    headings.forEach(heading => {
        heading.style.color = "#E5EBE4"
    })
    iconsArray.forEach(icon => {
        icon.setAttribute("fill", "#E5EBE4")
    })

} else {
    document.body.style.backgroundColor = "#E5EBE4";
    footer.style.backgroundColor = "#E5EBE4"
    headings.forEach(heading => {
        heading.style.color = "#E43E22"
    })
    iconsArray.forEach(icon => {
        icon.setAttribute("fill", "#E43E22")
    })
}
})