// 7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел. 
let arrNumb = [];
let value;
for (let i = 0; i < 5; i++) {
    value = +prompt();
    // if (typeof (value) == 'number') arrNumb.push(value)
    console.log(value + ' ' + typeof (value));
}
// console.log(arrNumb);
