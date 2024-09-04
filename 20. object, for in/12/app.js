// 12. На входе пустой объект и количество элементов массива n. Введите с клавиатуры n чисел,
// сформируйте массив, а затем добавьте в объект ключ sum, значением которого будет сумма
// элементов массива. Добавьте проверки на ввод чисел.

const obj = {}
let n = +prompt('Введите n')
let arr = []
for (let i = 0; i < n; i++) {
    let test = +prompt()
    if (!isNaN(test)) {
        arr.push(test)
    } else {
        i--
    }
}
obj.sum = arr.reduce(function (sum, elem) {
    return sum += elem
})

console.log(obj.sum)








