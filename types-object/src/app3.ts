// 3. На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
let arrN: number[] = []

for (let i: number = 0; i < 5; i++) {
    arrN.push(+prompt('Введите число'))
}
let result = arrN.reduce((sum: number = 0, el: number) => sum += el, 0)
console.log(result);
