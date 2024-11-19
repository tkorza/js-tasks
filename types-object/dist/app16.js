// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.
let arrNumB = [1, 23, 45, 66, 7];
let resultBool = true;
for (let i = 1; i < arrNumB.length; i++) {
    if (arrNumB[i] < arrNumB[i - 1])
        resultBool = false;
}
console.log(resultBool);
