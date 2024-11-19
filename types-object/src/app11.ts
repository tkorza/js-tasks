// 11. На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты

let dynArrStr: string[] = ['tkorza@inbox.ru', 'sdd12@mail.c', 'annapazdnthebest@yandex.by']
let boolRes: boolean = dynArrStr.every((el: string) => {
    return (/(^\w+\@[a-zA-Z]+\.[a-zA-Z]{2,6})/gm).test(el)
})

console.log(boolRes);
