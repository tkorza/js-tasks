// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2
let arrNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
let resultArr: number[] = []
for (let i: number = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 3 === 0 && arrNum[i] % 2 !== 0) resultArr.push(arrNum[i])
}

console.log(resultArr);
