// 8.  У тебя есть кнопка и место для отображения счётчика в параграфе. При каждом клике на кнопку число в счётчике должно увеличиваться на 1.

const p = document.querySelector('#p')
const btn = document.querySelector('button')
let current = 0
btn.addEventListener('click', () => {
    current++
    p.textContent = current
})