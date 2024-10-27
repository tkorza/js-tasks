// 1. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
// этого массива

const input = document.querySelector('input')
const button = document.querySelector('button')
const arrayP = document.querySelector('.array')
const avgP = document.querySelector('.avg')

let arr = []
let sum = 0

button.addEventListener('click', () => {
    arr.push(input.value)
    sum += +input.value
    arrayP.textContent = arr
    avgP.textContent = sum / arr.length
})
