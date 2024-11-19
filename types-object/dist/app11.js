// 11. На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты
let dynArrStr = ['tkorza@inbox.ru', 'sdd12@mail.c', 'annapazdnthebest@yandex.by'];
let boolRes = dynArrStr.every((el) => {
    return (/(^\w+\@[a-zA-Z]+\.[a-zA-Z]{2,6})/gm).test(el);
});
console.log(boolRes);
