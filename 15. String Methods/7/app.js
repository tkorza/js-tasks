// 7. Проверьте, заканчивается ли строка на .com или .ru. Выведите true или false.
// Входные: "example.com" → Результат: true
// Входные: "website.ru" → Результат: true
// Входные: "myweb.rusite" → Результат: false
// Входные: "mywebsite.org" → Результат: false

let a = prompt().trim()

if (a.endsWith('.com') || a.endsWith('.ru')) {
    console.log(true)
} else {
    console.log(false)
}