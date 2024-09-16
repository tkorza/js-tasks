// 11. На входе динамичный массив; число n с клавиатуры. Необходимо написать функцию,
// возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

let n = prompt('Введите n')
let arr = [1, 9, 45, 11, 10]

const foundMax = (arr, n) => {
    let elems = []
    for (let elem of arr) {
        if (elem > n) elems.push(elem)
    }
    return elems
}

console.log(foundMax(arr,n));
