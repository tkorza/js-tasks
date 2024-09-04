// 18. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод reduce, найти произведение всех чисел в массиве.
// Входные: [2, 3, 4] → Результат: 24
// Входные: [1, 5, 10] → Результат: 50

let n = prompt()
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}
let result = 1

console.log(
    arr.reduce(function(result, el){
        return result*=el
    })
)

