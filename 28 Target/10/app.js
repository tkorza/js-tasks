// 10. Вы вводите строку. Проверить является ли это слово палиндром. Добавить
// проверки

const btnTag = document.querySelector('button')
const inputTag = document.querySelector('input')
const pTag = document.querySelector('.result')

const isPalindrom = (str) =>{
    if(str == str.split('').reverse().join('')) return true
    else return false
}

btnTag.addEventListener('click',()=>{
    if(isPalindrom(inputTag.value)) pTag.textContent = 'Это палиндром'
    else pTag.textContent = 'Это не палиндром'
})