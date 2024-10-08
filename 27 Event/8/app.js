// 8. У вас есть кнопка. После нажатия поменять background. 

const tagButton = document.querySelector('button')

tagButton.addEventListener('click', () => {
    const arrColor = ['red', 'blue', 'green']
    const randomColor = Math.round(Math.random() * arrColor.length)
    tagButton.style = `background-color: ${arrColor[randomColor]}`
})
