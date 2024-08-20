// 2. Проверка слова на палиндром. Если слово читается одинаково с обеих сторон, выведите true,
// иначе false.
// Входные: "мем" → Результат: true
// Входные: "тест" → Результат: false

let a = prompt()
const reversedA = a.split('').reverse().join('')


if (a === reversedA) {
    console.log(true)
} else {
    console.log(false)
}