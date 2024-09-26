// 16. Повторите заданное предложение prompt указанное количество раз n - prompt.
// Метод: Используйте цикл for.
// Входные: ("Привет", 3) → Результат: "Привет Привет Привет "
// Входные: ("Мир", 2) → Результат: "Мир Мир "
// Входные: ("JavaScript", 1) → Результат: "JavaScript "


let str = prompt()
let n = prompt('Введите n')
let newstr = []
let i = 0
do {
    newstr.push(str + ' ')
    i++
} while (i < n)

console.log(newstr.join('').trim());


