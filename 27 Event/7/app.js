// 7. Записать в результат удвоенное значение инпута. Добавить проверки 

const tagButton = document.querySelector('button')
const inputTag = document.querySelector('input')
const tagP = document.querySelector('.result')

tagButton.addEventListener('click', () => {
    try {
        if (isNaN(inputTag.value)) throw new Error('Введено не число')
        tagP.textContent = `Результат: ${inputTag.value * 2}`
    } catch (error) {
        console.log(error);

    }

})

console.log(12);

