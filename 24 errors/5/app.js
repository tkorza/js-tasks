// 5. Реализуйте функцию, которая принимает число и возвращает возвенную в квадрат каждую
// цифру числа соединяя их. Добавить проверки на ввод числа
// 9119 -> 811181 (9
// 2 === 81, 1
// 2=== 1)

let n = prompt('Введите число!')

function pow(n) {
    try {
        if (isNaN(n)) throw Error('Введено не число!')
        let arrTest = n.split('')
        let result = []
        arrTest.forEach(elem => {
            result.push(elem ** 2)
        });
        return result.join('')

    }

    catch (error) {
        return error
    }
}


console.log(pow(n));
