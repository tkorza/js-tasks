const prevbtn = document.querySelector('#prevButton')
const nextbtn = document.querySelector('#nextButton')
const container = document.querySelectorAll('#sliderContainer img')
let currentImageIndex = 0

nextbtn.addEventListener('click', () => {
    if (currentImageIndex == container.length - 1) currentImageIndex = 0
    else currentImageIndex++
    container.forEach((el, i) => {
        el.style = 'display:none'
        if (i === currentImageIndex) el.style = 'display:block; width:300px'
    });
})

prevbtn.addEventListener('click', () => {
    if (currentImageIndex == 0) currentImageIndex = 3
    currentImageIndex--
    container.forEach((el, i) => {
        el.style = 'display:none'
        if (i === currentImageIndex) el.style = 'display:block; width:300px'
    });
})  