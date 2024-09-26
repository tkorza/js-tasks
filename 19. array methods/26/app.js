// 26. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Вывести true, если все строки в массиве имеют длину более 3 символов. Использовать метод every.
// Входные: ["apple", "banana", "cherry"] → Результат: true
// Входные: ["dog", "cat", "apple"] → Результат: false
// Входные: ["hschool", "company", "cherry"] → Результат: true

// let n = prompt()
let arr = ["apple", "banana", "cherry"]

// for (let i = 0; i < n; i++) {
//     arr.push(prompt())
// }

const result = arr.every((el)=> el.length > 3)

console.log(result)
let result2
arr.forEach(function(el){
    if(el.length>3) result2= true
    else result2 = false
})

console.log(result2);


