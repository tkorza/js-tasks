// 16. На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что
// в массиве только числа. Третья для формирования массива из всех четных чисел, возведенных в
// квадрат. Если результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив из всех четных чисел, возведенных в квадрат
function addArr(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(+prompt())
    }
    return arr
}

function chekIsNumberArr(arrTest) {
    let result = arrTest.every(function (elem) {
        if (!isNaN(elem)) return true
        else return false
    })
    return result
}

function evenResult(arrTest) {
    let result = []
    for (let elem of arrTest) {
        if (elem % 2 == 0) {
            result.push(Math.pow(elem, 2))
        }
    }
    return result
}

let n = prompt('Введите n')
let arr = addArr(n)
if (chekIsNumberArr(arr)) console.log(evenResult(arr));


