// 11.  У тебя есть кнопка для добавления элемента в список и кнопка для удаления всех элементов из списка. Когда пользователь нажимает на первую кнопку, создается новый элемент списка с текстом «Элемент N» (где N — порядковый номер элемента). При нажатии на вторую кнопку все элементы из списка удаляются.

const btnAdd = document.querySelector('.add')
const btnDelete = document.querySelector('.delete')
const ul = document.querySelector('ul')
let current = 1

btnAdd.addEventListener('click', () => {
    const newLi = document.createElement('li')
    newLi.textContent = `Элемент ${current}`
    ul.appendChild(newLi)
    current++
})

btnDelete.addEventListener('click', () => {
    ul.innerHTML = '';
    current = 1
})