// 5. На входе массив. Необходимо создать функцию проверки на то что в массиве только числа.
// Функция возвращает true, если в массиве только числа и false в противном случае

let arr = [0, 1, 2,]

function doArr(arrTest) {
    const result = arrTest.every(function(elem){
        if(isNaN(elem)) return false
        else return true
    });

    return result
}

console.log(doArr(arr));
