// 4. Пользователь вводит свое имя. Выведите приветственное сообщение в формате: "Привет, [имя]!".
// Решение через: конкатенация, интерполяция.
// Входные: "Анна" → Результат: "Привет, Анна!"
// Входные: "Олег" → Результат: "Привет, Олег!"

let a = prompt()

console.log('Привет, ' + a + '!')
console.log(`Привет, ${a}!`)

