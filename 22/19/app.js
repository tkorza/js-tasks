// Реализуйте функцию, которая возвращает другую функцию, накапливающую сумму всех переданных ей чисел.
//  При каждом вызове возвращается текущая накопленная сумма.

// const accumulate = sumAccumulator();
// console.log(accumulate(5));  // 5
// console.log(accumulate(10));  // 15
// console.log(accumulate(3));   // 18

function sumAccumulator() {
    let sum = 0
    return function (a) {
        sum += a
        return sum
    }
}
const accumulate = sumAccumulator();
console.log(accumulate(5));  // 5
console.log(accumulate(10));  // 15
console.log(accumulate(3));   // 18