// 6. На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 2 функции. Первая для формирования массива. Вторая для нахождения
// количества элементов массива

let n = 3

let arr = []
function doArr(arrTest) {
    for (let i = 0; i < n; i++){
        arr.push(prompt())
    }
}

function foundLength(arrTest){
    return arrTest.length
}

doArr(arr)
console.log(foundLength(arr));




