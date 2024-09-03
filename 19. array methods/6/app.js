// 6. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод every, вывести true, если все элементы массива являются числами, иначе false.
// Входные: [1, 2, 3, 4] → Результат: true
// Входные: [1, 'a', 3, 4] → Результат: false

let n = prompt('Введите N')
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}

console.log(arr.every(function(elem){
    // return isNaN(elem)? false: true
    
    if(isNaN(elem)){
        return false
    }else{
        return true
    }
}))