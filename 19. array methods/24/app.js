// 24. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Проверить, содержит ли массив хотя бы одно положительное число. Использовать метод some.
// Входные: [1, -2, -3, -4] → Результат: true
// Входные: [-1, -2, -3, -4] → Результат: false
// Входные: [10, -10, 20] → Результат: true

let n = prompt()
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}
let result = []
result = arr.some(function(elem){
    if(elem>0){
        return true
    }else{
        return false
    }
})

console.log(result)

