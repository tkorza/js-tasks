// 8. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом 
const inputTag = document.querySelector('input')
const btnTag = document.querySelector('button')
const pTag = document.querySelector('.result')

btnTag.addEventListener('click', () => {
    const errorMessage =  'Введено пустое значение!'    
    if(!inputTag.value) pTag.textContent = errorMessage
    else if (pTag.textContent.length == 0) pTag.textContent = pTag.textContent + inputTag.value
    else pTag.textContent = pTag.textContent + ', ' + inputTag.value
    inputTag.value = ''
})