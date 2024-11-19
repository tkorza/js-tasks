// 17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами
let numberArr = [1, 2, 3, 4, 5, 6];
let maxValue = -Infinity;
let minValue = +Infinity;
for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > maxValue)
        maxValue = numberArr[i];
    if (numberArr[i] < minValue)
        minValue = numberArr[i];
}
console.log(maxValue - minValue);
