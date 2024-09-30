// 9. На вход подается массив чисел. Вернуть массив, в котором все отрицательные числа
// заменены на 0. Добавить проверку на ввод (все элементы массива должны быть числами).
// [-1, 2, -3, 4] -> [0, 2, 0, 4]

let arr = [-1, 2, -3, 4,'d']

function newArr(arr) {
    try {
        let check = arr.some((el) => isNaN(el))
        if (check) return Error('В массиве не число!')

        return arr.map((el) => el < 0 ? 0 : el)
    }

    catch (error) {
        return error
    }
}

console.log(newArr(arr));
