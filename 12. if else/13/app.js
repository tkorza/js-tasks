/*
Вы вводите значение с клавиатуры. Если значение равно 0, то вывести ‘Ноль’, если
< 0, то вывести ‘Отрицательное’, если > 0, то вывести ‘Положительное’
 */
let a = prompt()

if (a == 0) {
    console.log('ноль');
} else if (a < 0) {
    console.log('отрицательное');
}
else {
    console.log('положительное');
}


