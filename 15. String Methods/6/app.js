// 6. Проверьте, включает ли строка .com или .ru. Выведите true или false.
// Входные: "example.com" → Результат: true
// Входные: "website" → Результат: false
// Входные: "myweb.rusite" → Результат: true


let a = prompt().trim()

if (a.includes('.com') || a.includes('.ru')) {
    console.log(true)
} else {
    console.log(false)
}