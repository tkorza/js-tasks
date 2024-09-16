// 1. Пользователь вводит имя фамилию. Необходимо создать функцию возвращающую строку вида
// «Привет, {имя} {фамилия}»

function doName(firstName, lastName){
    return `Привет, ${firstName} ${lastName}`
}

let firstName = prompt('Введите имя')
let lastName = prompt('Введите фамилию')

 console.log(doName(firstName, lastName))