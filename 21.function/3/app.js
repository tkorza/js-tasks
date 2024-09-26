// 3. Напишите функцию, которая принимает строку в маленьком регистре и возаращает строку, где
// каждое слово начинается с большого регистра
// hschool company -> Hschool Company

// function doUpper(str) {
//     let test = str.split(' ')
//     let result = ''
//     for (let i = 0; i < test.length; i++) {
//         result += test[i][0].toUpperCase() + test[i].slice(1) + ' '
//     }
//     return result.trim()
// }

const doUpper=(str)=> {
    let test = str.split(' ')
    let result = test.map((el, i) => test[i][0].toUpperCase() + test[i].slice(1) + ' ')
    return result.join(' ').trim()
}



console.log(doUpper(prompt('Введите строку')))