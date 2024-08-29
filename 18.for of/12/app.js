// 12 Выведите каждый элемент массива [1, 2, 2, 3, 4, 4, 3, 4, 5] без повторений.
// Методы: Используйте циклы for, for...of.
// Входные: [1, 2, 2, 3, 4, 4, 3, 4, 5] → Результат: [1, 2, 3, 4, 5]

let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5]
let arr_ = []
for (let i = 0; i < arr.length; i++) {
    if(arr_.includes(arr[i])){
        continue;
    }else{
        arr_.push(arr[i])
    }
}

console.log(arr_)

arr_ = []

for( let el of arr){
    if(arr_.includes(el)){
        continue;
    }else{
        arr_.push(el)
    }
}

console.log(arr_)