// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только строки.
// Вторая для получения суммы всех строчных элементов массива. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую конкатенацию всех строчных
// элементов массива
let arr = ['h', 's', 'c']


// function allStr(arrTest) {
//     let result = arrTest.every(function (elem) {
//         if (isNaN(elem)) return true
//         else return false
//     })

//     return result
// }
const allStr = (arrTest) => arrTest.every((el) => isNaN(el) ? true : false)

const doSum = (arrTest) => {
    let result = ''
    for (let i = 0; i < arrTest.length; i++) {
        result += arrTest[i]
    }

    return result
}




if (allStr(arr)) console.log(doSum(arr))