// 5. Пользователь вводит имя и фамилию. Выведите полное имя в формате: "[Имя] [Фамилия]".
// Решение через: конкатенация, интерполяция.
// Входные: "Иван", "Петров" → Результат: "Иван Петров"
// Входные: "Екатерина", "Смирнова" → Результат: "Екатерина Смирнова“

let firstname = prompt()
let surname = prompt()

console.log(firstname + ' ' + surname)
console.log(`${firstname} ${surname}`)




