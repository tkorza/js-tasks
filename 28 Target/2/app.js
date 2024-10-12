// 2. Создайте несколько элементов (например, кнопок) на странице. При клике на
// элемент, используйте event.target для определения на какой из элементов
// производилось действие и измените цвет.
const divTag = document.querySelector('div')


divTag.addEventListener('click', (event) => {
    const colorArr = ['green', 'blue', 'red', 'pink']
    const randomColor = colorArr[Math.round(Math.random() * colorArr.length - 1)]
    event.target.style = `background-color:  ${randomColor}`
    console.log(event.target.textContent);

})