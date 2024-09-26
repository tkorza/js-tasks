// Реализуйте функцию, которая возвращает другую функцию, находящую минимальное значение из всех переданных ей чисел. 
// При каждом вызове возвращается текущее минимальное значение.

// const minTracker = createMinTracker();
// console.log(minTracker(10));  // 10
// console.log(minTracker(5));   // 5
// console.log(minTracker(7));   // 5
// console.log(minTracker(3));   // 3


function createMinTracker() {
    let minValue = Infinity
    return function (a) {
        if (minValue > a) minValue = a
        return minValue
    }
}
const minTracker = createMinTracker();
console.log(minTracker(10));  // 10
console.log(minTracker(5));   // 5
console.log(minTracker(7));   // 5
console.log(minTracker(3));   // 3