// 11. Вычислить сумму последовательности целых чисел до первого встреченного нуля.
// Гарантируется наличие хотя бы одного нуля в последовательности. Дополнительное
// условие - убедиться, что все элементы последовательности являются числами.
// [5, 1, 2, 3, 0, 1, 5, 0, 2] –> 11 (5 + 1 + 2 + 3 = 11)

function sum(arr) {
    try {
        let isNumber = arr.every((el) => typeof (el) === 'number')
        if (!isNumber) throw Error('В массиве не только числа!')
        let sum = 0
        for (let el of arr) {
            if (el == 0) break
            sum += el
        }
        return sum
    }


    catch (error) {
        return error
    }
}

console.log(sum([5, 1, 0, 3, 0, 1, 5, 0, 2]));
