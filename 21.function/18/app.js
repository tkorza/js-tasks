// 18. Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”. Функция должна
// преобразовать строку в формат “xxxx-xx-xx”. 

let str = 'xx/xx/xxxx'

let strNew = (str) => str.split('/').reverse().join('-')

console.log(strNew(str))
