// 10. На вход подается массив чисел. Найти количество уникальных элементов в массиве.
// Добавить проверку на ввод (все элементы должны быть числами).
// [1, 2, 2, 3, 4, 4, 5] -> 5
// (уникальные элементы: 1, 2, 3, 4, 5)

let arr = [1, 2, 2, 3,'f', 4, 4, 5]

const checkArr = (arr) => {
    try {
        let isNumber = arr.every((el) => typeof (el) === 'number')
        if(!isNumber) throw Error('В массиве не только числа!')

        const arrTest = []
        for(let el of arr){
            if(!arrTest.includes(el)) arrTest.push(el)
        }
        return arrTest.length

    }

    catch (error) {
        return error
    }
}

console.log(checkArr(arr));


