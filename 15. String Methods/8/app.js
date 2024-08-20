// 8. Замените все @ на ! в строке.
// Входные: "user@domain.com" → Результат: "user!domain.com"
// Входные: "@@email@@@" → Результат: "!!email!!!"

let a = prompt().trim()

if (a.includes('@')) {
    console.log(a.replaceAll('@', '!'))
} else {
    console.log('@ отсутствует')
}
