// 14. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для поиска максимального значения в массиве. Если результат функции проверки – true, то
// вызывать новую функцию, возвращающую максимальное значение массива

let arr = [1, 7, 3, 4, 5]
function checkNumber(arr) {
    let result = arr.every(function (elem) {
        if (!isNaN(elem)) return true
        else return false
    })

    return result
}

const foundMax = (arr) => {
    let max = -Infinity
    for (let elem of arr) {
        if (elem > max) max = elem
    }
    return max
}

if (checkNumber(arr)) console.log(foundMax(arr));
