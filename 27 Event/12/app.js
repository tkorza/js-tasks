// 12. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
//         проверку, что поле не пустое

const tagButton = document.querySelector('button')
const tagInput = document.querySelector('input')
const tagP = document.querySelector('.result')

tagButton.addEventListener('click', () => {
    try {
        if(!tagInput.value)throw Error('Ничего не введено!')
        tagP.textContent = `Результат: ${tagInput.value.split('')}`
    } catch (error) {
        alert(error)
    }
    
})
