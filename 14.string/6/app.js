// 6. Пользователь вводит день, месяц и год. Выведите дату в формате: "[день].[месяц].[год]". Решение
// через: конкатенация, интерполяция.
// Входные: "13", "08", "2024" → Результат: "13.08.2024"
// Входные: "01", "01", "2022" → Результат: "01.01.2022“

let day = prompt()
let mounth = prompt()
let year = prompt()

console.log(day + '.' + mounth + '.' + year)
console.log(`${day} ${mounth}.${year}`)