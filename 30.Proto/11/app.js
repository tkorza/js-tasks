// 6. Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 2); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах

const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')

const button = document.querySelector('button')
const resultP = document.querySelector('.result')

const isValid = () => {
    if (isNaN(input1.value)) throw new Error('значение должно быть числовым!')
    if (isNaN(input2.value)) throw new Error('значение должно быть числовым!')
    if (isNaN(input3.value)) throw new Error('значение должно быть числовым!')
    if (input1.value < 2) throw new Error('число столбов должно быть больше 2')
    if (input2.value < 10 || input2.value > 30) throw new Error('расстояние между столбами 10-30!')
    if (input3.value < 10 || input3.value > 50) throw new Error('ширина столба 10-50!')
}
button.addEventListener('click', () => {
    try {
        isValid()
        resultP.textContent = (input1.value - 1) * input2.value + (input1.value - 2) * input3.value / 100
    }
    catch (error) {
        resultP.textContent = error
    }
})





