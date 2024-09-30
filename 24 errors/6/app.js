// 6. Реализуйте функцию, которая принимает массив чисел и возвращает индекс наибольшего
// числа. Если таких чисел несколько, вернуть индекс первого найденного.
// Добавить проверки на ввод
// [1, 3, 7, 7, 5] -> 2
let arr = [1, 3, 7, 7, 5]

function findIndexOfMax(arr) {
    try {
        let check = arr.some((el) => {
            return isNaN(el)
        })
        if (check) throw Error('Присутсвтует не число!')
        let max = -Infinity
        let indexOfMax
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
                indexOfMax = i
            }
        }
        return indexOfMax
    }
    catch (error) {
        return error
    }
}

console.log(findIndexOfMax(arr));
