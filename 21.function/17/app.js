// 17. Написать функцию, принимающую в параметрах строку текста в маленьком регистре. Разбить
// строку на массив. Функция должна вернуть строку, где каждый элемент массива в чередование
// регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

let str = 'hschool'

function strNew(str){
    let strArr = str.split('')
    let result = strArr.map( (el, i)=> !i % 2 == 0 ? el.toLowerCase() : el.toUpperCase())
    return result.join('')
}

console.log(strNew(str));


