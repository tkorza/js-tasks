// 2. У тебя есть массив чисел numbers, и тебе нужно отфильтровать только чётные числа. Создай новый массив evenNumbers, который будет содержать только чётные значения из numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter(el => el % 2 == 0 ? true : false)

console.log(evenNumbers);

