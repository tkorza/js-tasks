// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для получения массива с удвоенными значенями каждого элемента. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив с удвоенными элементами

let arr = [1, 2, 3, 4, 5, 'f']

function checkNumber(arrCheck) {
    let result = arrCheck.every(function (elem) {
        if (!isNaN(elem)) return true
        else return false
    })

    return result
}

function double(arrTest) {
    let result = arrTest.map(function (elem) {
        return elem * 2
    })

    return result
}

if (checkNumber(arr)) console.log(double(arr));
