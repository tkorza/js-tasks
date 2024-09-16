// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для получения только четных элементов массива. Если результат функции проверки – true, то
// вызывать новую функцию, возвращающую массив с четными элементами массива

let arr = [1, 2, 3, 4, 5, 6]

function checkNumber(arrCheck) {
    let result = arrCheck.every(function (elem) {
        if (!isNaN(elem)) return true
        else return false
    })

    return result
}

function evenFound(arrTest) {
    let resultArr = []
    for (let i = 0; i < arrTest.length; i++) {
        if (i % 2 !== 0 && i !== 0) resultArr.push(arrTest[i])
    }
    return resultArr
}

if (checkNumber(arr)) console.log(evenFound(arr));
