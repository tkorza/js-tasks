// 6.  У тебя есть кнопка и абзац. Когда пользователь нажимает на кнопку, текст в абзаце должен меняться на «Текст изменён!».
const p = document.querySelector('#p')
const btn = document.querySelector('button')

btn.addEventListener('click', () => p.textContent = 'Текст изменён!')
