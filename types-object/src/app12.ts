// 12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.

let numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let resultValue: number = 0
for (let i: number = 1; i < numArr.length; i += 2) {
    resultValue += numArr[i]
}
console.log(resultValue);
