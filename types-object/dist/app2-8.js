// 8. У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту
let arrMail = ['ttkk@mail.ru', 'ttkk@mail.ru', 'gggggg@mail.ru', 'ttttttt@mail.ru', 'aaaaaaa@mail.ru'];
let resultArray = [];
arrMail.forEach((el) => {
    if ((/(^\w+\@[a-zA-Z]+\.[a-zA-Z]{2,6})/gm).test(el) && !resultArray.includes(el))
        resultArray.push(el);
});
console.log(resultArray);
// let dynArrStr: string[] = ['tkorza@inbox.ru', 'sdd12@mail.c', 'annapazdnthebest@yandex.by']
// let boolRes: boolean = dynArrStr.every((el: string) => {
//     return (/(^\w+\@[a-zA-Z]+\.[a-zA-Z]{2,6})/gm).test(el)
// })
// console.log(boolRes);
