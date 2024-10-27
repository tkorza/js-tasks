// 10. У тебя есть кнопка и абзац текста. Когда пользователь нажимает на кнопку, текст должен скрываться. Если нажать на кнопку ещё раз, текст снова должен отображаться.
const p = document.querySelector('#p')
const button = document.querySelector('button')
let isDisplayed = true
button.addEventListener('click', () => {
    if (isDisplayed) {
        p.style = 'display:none'
        isDisplayed = false
    } else {
        p.style = 'display:block'
        isDisplayed = true
    }
})