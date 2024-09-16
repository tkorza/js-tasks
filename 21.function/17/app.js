// 17. Написать функцию, принимающую в параметрах строку текста в маленьком регистре. Разбить
// строку на массив. Функция должна вернуть строку, где каждый элемент массива в чередование
// регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

let str = 'hschool'


const newStr = (str) => {
    let result = str.split('').map(function (elem, i) {
        return i % 2 == 0 ? elem.toUpperCase() : elem.toLowerCase()
    })
    return result.join('')
}


console.log(newStr(str));
