// Пользователь вводит доменное имя и путь на сайте. Выведите полный URL в формате:
// "https://[домен]/[путь]". Решение через: конкатенация, интерполяция.
// Входные: "example.com", "about" → Результат: "https://example.com/about"
// Входные: "mysite.ru", "contact" → Результат: https://mysite.ru/contact

let domName = prompt("Введите доменное имя")
let way = prompt("Введите доменное имя")

// console.log("https://"+ domName + "/" + way)


console.log(`https://${domName}/${way}`)