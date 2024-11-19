// 3. На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
let arrN = [];
for (let i = 0; i < 5; i++) {
    arrN.push(+prompt('Введите число'));
}
let result = arrN.reduce((sum = 0, el) => sum += el, 0);
console.log(result);
