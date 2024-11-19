// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.

let arrNumB: Array<number> = [1, 23, 45, 66, 7]
let resultBool: boolean = true
for (let i: number = 1; i < arrNumB.length; i++) {
    if (arrNumB[i] < arrNumB[i - 1]) resultBool = false
}
console.log(resultBool);

