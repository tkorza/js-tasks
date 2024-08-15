// 3. Определите, заканчивается ли строка на восклицательный знак "!". Решение через: if … else,
// тернарный оператор.
// Входные: "Hello!" → Результат: true
// Входные: "Hello" → Результат: false
let a = prompt()

if (a[a.length - 1] == '!') {
    console.log(true)
} else {
    console.log(false)
}

a[a.length - 1] == '!' ? console.log(true) : console.log(false)