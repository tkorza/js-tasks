// 8. Реализуйте функцию, которая находит наименьшее общее кратное (НОК) двух чисел.
// Добавить проверку на ввод (вводимые значения должны быть целыми числами).
// Пример:
// НОК(6, 8) -> 24
let a1 = prompt('Введите 1 число')
let a2 = prompt('Введите 2 число')

function NOK(a1, a2) {
    try {
        if (!isNaN(a1) && !isNaN(a2) && a1 !== Math.round(a1) && a2 !== Math.round(a2)) throw Error('Введено не целое число!')
        let result = 1
        while (true) {
            if (result % a1 === 0 && result % a2 === 0) {
                break
            }
            result  ++
        }
        return result
    }
    catch (error) {
        return error
    }

}

console.log(NOK(a1,a2));
