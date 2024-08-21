// 11. Найдите максимальное значение в статичном массиве, используя цикл for.
// Входные: [5, 12, 7, 9, 14] → Результат: 14

let arr = [5, 12, 7, 9, 14]
let max = 0 

for (let i = 0; i < arr.length; i++){
    if(arr[i]> max){
        max = arr[i]
    }
}

console.log(max)



