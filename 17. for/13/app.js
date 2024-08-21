// 13. Пользователь вводит строку и число n. Повторите строку n раз с помощью цикла for.
// Входные: "hello", 3 → Результат: "hellohellohello"
// Входные: "abc", 2 → Результат: "abcabc"
// Входные: "xyz", 5 → Результат: "xyzxyzxyzxyzxyz"


let str = prompt().trim()
let n = +prompt()
let str2 = ''

for (let i = 0; i < n; i++) {
    str2+= str
}

console.log(str2)

