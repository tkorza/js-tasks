// 5. По двойному клику на кнопку изменить цвет кнопки

const btnTag = document.querySelector('button')

let clickCount = 1

btnTag.addEventListener('click', () => {
    if (clickCount == 2) {
        btnTag.style = `background-color: red`
        clickCount = 0
    } else {
        btnTag.style = `background-color: white`
        clickCount++
    }

})