// 7. Создайте форму с выпадающим списком для выбора единицы измерения(например, дюймы, сантиметры, метры).При выборе единицы измерения отображайте соответствующее значение.

const divTag = document.querySelector('div')
const pTag = document.querySelector('.result')

divTag.addEventListener('click', (event) => {
    pTag.textContent = event.target.value
})