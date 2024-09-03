// 10. На входе n – количество элементов массива, затем пользователь заполняет массив arr с
// клавиатуры. В памяти также есть статичная переменная со значением "javascript". Создать новый
// массив из строк массива arr, которые включают значение переменной "javascript". Проверить ввод
// только текстовых значений. Использовать метод forEach.
// Входные: ["I love javascript", "coding", "javascript is fun", "python"] → Результат: ["I love javascript", "javascript is
// fun"]
// Входные: ["javascript", "java", "typescript"] → Результат: ["javascript"]


let n = prompt()
const st = "javascript"
let arr = []

for (let i = 0; i < n; i++) {
    let teste = prompt()
    if (isNaN(teste)) {
        arr.push(teste)
    } else {
        continue
    }
}

let resultArr = []

arr.forEach(function(elem){
    if(elem.includes(st)){
        resultArr.push(elem)
    }
})

console.log(resultArr)
