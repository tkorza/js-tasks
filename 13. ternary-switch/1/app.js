// Определите, кратко ли введенное число трём. (Решить задачу через: if … else, тернарный оператор)
// Входные: 9 → Результат: true
// Входные: 7 → Результат: false

let a = prompt()

console.log(a);

if (Math.abs(a % 3) === 0 & a != 0) {
    console.log(true)
}

else {
    console.log(false)
}
// ternary
Math.abs(a % 3) === 0 & a != 0 ? console.log(true) : console.log(false)


