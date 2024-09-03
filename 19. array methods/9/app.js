// 9. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать новый массив, содержащий только те строки, которые начинаются с символов a или h.
// Проверить ввод только текстовых значений. Использовать метод filter.
// Входные: ["ann", "school", "hschool", "borabora"] → Результат: ["ann", "hschool"]
// Входные: ["apple", "banana", "harvest", "grape"] → Результат: ["apple", "harvest"]
// Входные: ["home", "anchor", "boat"] → Результат: ["home", "anchor"]

let n = prompt('Введите n')
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

arr.filter(function (elem) {
    if(elem.startsWith('a')|| elem.startsWith('h')){
        resultArr.push(elem)
    }
})

console.log(resultArr)

