// 9. У тебя есть кнопка и пустой список. Каждый раз, когда пользователь нажимает на кнопку, в список должен добавляться новый элемент с текстом «Новый элемент».

const ul = document.querySelector('ul')
const btn = document.querySelector('button')

let current = 1
btn.addEventListener('click', () => {
    const newLi = document.createElement('li')
    newLi.textContent = `Элемент ${current}`
    ul.appendChild(newLi)
    current++
})








// document.querySelector('#ulList').appendChild(newListItem);