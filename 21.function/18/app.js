// 18. Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”. Функция должна
// преобразовать строку в формат “xxxx-xx-xx”. 

let str = '19/01/2024'

// function newDateFormat(str) {
//     return str.split('/').reverse().join('-')
// }




const newDateFormat = (str) => str.split('/').reverse().join('-')

console.log(newDateFormat(str));