// 11. На входе пустой объект. Необходимо ввести с клавиатуры два числа, затем добавить в объект ключ
// avg со значением среднего арифметического введенных чисел.


const obj = {}
let a = +prompt('Введите a')
let b = +prompt('Введите b')

obj.avg = (a + b) / 2


console.log(obj.avg)



