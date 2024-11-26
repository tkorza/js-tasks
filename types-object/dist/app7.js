// 7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел. 
let startArr = [];
for (let i = 0; i < 5; i++) {
    startArr.push(prompt());
}
console.log(startArr);
let resArrNumber = startArr.filter((el) => {
    if (!isNaN(+el))
        return true;
});
console.log(resArrNumber);
