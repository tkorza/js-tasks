// 11. По нажатию на кнопку поменять местами значения 2 инпутов. 

const tagButton = document.querySelector('button')
const tagInput1 = document.querySelector('.input1')
const tagInput2 = document.querySelector('.input2')

tagButton.addEventListener('click', () => {
    let value1 = tagInput1.value
    let value2 = tagInput2.value
    tagInput1.value = value2
    tagInput2.value = value1
})
