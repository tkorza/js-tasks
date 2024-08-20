// 15. Дана строка из трех слов, разделенных пробелом. Вырежьте 2-е и 3-е слова.
// Входные: "hello world example" → Результат: 'hello'
// Входные: "JavaScript is awesome" → Результат: 'JavaScript'
// Входные: "I love coding" → Результат: 'I'

let a = 'hello world example'
const b = a.split(' ')
console.log(b[0])
