// 19. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод reduce, посчитать количество чисел в массиве.

let n = prompt()
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}
let result = 0
console.log(
    arr.reduce(function(sum,el){
        if(!isNaN(el)){
            sum++
        }
        return sum
    })
)

