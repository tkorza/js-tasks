// 13. По условию задачи даны инпут и кнопка. Напишите функцию, которая
// преобразует любое предложение инпута в предложение VAPORWAVE.
// предложение VAPORWAVE преобразует все буквы в верхний регистр и добавляет
// 2 пробела между каждой буквой (или специальным символом)
// Why isn't my code working? – W H Y I S N ' T M Y C O D E W O R K I N G ?

const btn = document.querySelector('button')
const input = document.querySelector('input')
const p = document.querySelector('.res')

btn.addEventListener('click', () => {
    const str = input.value.split(' ').join('').split('').join('  ').toLocaleUpperCase()
    p.textContent = str
})
