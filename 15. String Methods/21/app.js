// 21. Пользователь вводит строку. Подсчитайте количество гласных в строке.
// Входные: "программирование" → Результат: 6
// Входные: "hello" → Результат: 2
// Входные: "OpenAI" → Результат: 4
// a, o, e, i, u, y,а, у, о, ы, и, э, я, ю, ё, е
let a = prompt().toLowerCase()

let b = a.split('a').join('')
b = b.split('o').join('')
b = b.split('e').join('')
b = b.split('i').join('')
b = b.split('u').join('')
b = b.split('y').join('')
b = b.split('а').join('')
b = b.split('у').join('')
b = b.split('о').join('')
b = b.split('ы').join('')
b = b.split('и').join('')
b = b.split('э').join('')
b = b.split('я').join('')
b = b.split('ю').join('')
b = b.split('ё').join('')
b = b.split('е').join('')

console.log(a.length - b.length)
