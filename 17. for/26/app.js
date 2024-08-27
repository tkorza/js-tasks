// 26. Дана строка. Напишите программу, которая с помощью цикла for подсчитывает количество
// гласных букв в строке. Гласные: a, e, i, o, u.
// Входные: "Hello!"
// Результат: Количество гласных: 2
// Входные: "Sky"
// Результат: Количество гласных: 0

let str = prompt().trim()
let vowels = 'a, e, i, o, u'
let result = 0

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        result++
    } else {
        continue
    }
}

console.log('Количество гласных: ' + result)