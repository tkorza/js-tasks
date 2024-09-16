// 15. На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что
// в массиве только числа. Третья для получения произведения всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую произведение
// всех элементов массива




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

// function proizvedenie(arrTest) {
//     let result = 1
//     for (let elem of arrTest) {
//         result *= elem
//     }
//     return result
// }

const proizvedenie = (arrTest) => arrTest.reduce(function (elem, pr = 1) {
    return pr * elem
})




let n = prompt('Введите n')
let arr = addArr(3)
if (chekIsNumberArr(arr)) console.log(proizvedenie(arr));

