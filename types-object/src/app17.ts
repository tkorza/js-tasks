// 17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами

let numberArr: number[] = [1, 2, 3, 4, 5, 6]
let maxValue: number = -Infinity
let minValue: number = +Infinity

for (let i: number = 0; i < numberArr.length; i++) {
    if (numberArr[i] > maxValue) maxValue = numberArr[i]
    if (numberArr[i] < minValue) minValue = numberArr[i]
}

console.log(maxValue - minValue);
