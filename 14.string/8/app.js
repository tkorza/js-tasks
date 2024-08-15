// Пользователь вводит строку и число n. Найдите символ в строке под индексом n. Добавьте
// проверку, чтобы убедиться, что введено число n.
// Входные: "JavaScript", 4 → Результат: "S"
// Входные: "Hello", 10 → Результат: "Индекс вне диапазона"

let a = prompt()
let n = +prompt()

if (isNaN(n)) {
    console.log('error')
} else if (n > a.length) {
    console.log("Индекс вне диапазона")
} else {
    console.log(a[n])
}

