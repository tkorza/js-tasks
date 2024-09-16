// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для получения суммы всех элементов массива. Если результат функции проверки – true, то
// вызывать новую функцию, возвращающую сумму всех элементов массива
let arr = [1, 2, 3, 'f']

function numb(arrTest) {
    let result = arrTest.every(function (elem) {
        if (isNaN(elem)) return false
        else return true
    })
    return result
}

function doSum(arrTest) {
    let result = 0
    for (let i = 0; i < arrTest.length; i++) {
        result+= arrTest[i]
    }
    return result
}

if(numb(arr)){
    console.log(doSum(arr));
}

