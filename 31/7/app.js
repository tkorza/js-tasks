// 7. У тебя есть кнопка, и при каждом её нажатии цвет фона страницы должен переключаться между белым и голубым.

const btn = document.querySelector('button')
const body = document.querySelector('body')

let colorIndex = 0
btn.addEventListener('click', () => {
    if (colorIndex == 0) {
        colorIndex = 1
        body.style = 'background-color: cyan'
    } else {
        colorIndex = 0
        body.style = 'background-color: #fff'
    }
})
