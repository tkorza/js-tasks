// 7. Пользователь вводит строку, представляющую число. Необходимо просуммировать все цифры в
// строке.
// Входные: "123" → Результат: 6
// Входные: "111111111111" → Результат: 12



let a = prompt()
let sum = 0
for (i = 0; i < a.length; i++) {
    sum += +a[i]
}

console.log(sum)























// let a = prompt()
// let sum = 0
// for (i = 0; i < a.length; i++) {
//     sum += +a[i]
// }

// console.log(sum)