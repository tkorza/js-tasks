// 10. Пользователь вводит строку и символ. Убедитесь, что данный символ не присутствует в строке.
// Если он есть, выведите его индекс, иначе выведите "Символ не найден".
// Входные: "hello", "o" → Результат: "4"
// Входные: "world", "a" → Результат: "Символ не найден"
// Входные: "example", "e" → Результат: "0"

let str = prompt()
let symbol = prompt()

if (str.includes(symbol)) {
    console.log(str.indexOf(symbol))
} else {
    console.log('Символ не найден')
}