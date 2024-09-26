// 2. Напишите функцию, которая принимает строку состоящую из нескольких слов. Каждое нечетное
// слово строки функция должна преобразовать в нижний регистр, все четные слова, соответственно,
// в верхний
// happy new year -> happy NEW year

function func(str) {
    let test = str.split(' ')
    let result = test.map((el, i) => i % 2 == 0 ? el.toLowerCase() : el.toUpperCase())
    // for (let i = 0; i < test.length; i++) {
    //     if (i % 2 == 0) {
    //         result = result + ' ' + test[i].toLowerCase()
    //     } else {
    //         result = result + ' ' + test[i].toUpperCase()
    //     }
    // }

    return result.join(' ').trim()
}

let arg = prompt('Введите строку')


console.log(func(arg))