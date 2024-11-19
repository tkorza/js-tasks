// 9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.

const arrNumStr: (string | number)[] = ['a', 'a', 'g', 'f', 'f', 1, 2, 3]
let resArray: (string | number)[] = []

arrNumStr.forEach(el => {
    if (!resArray.includes(el)) resArray.push(el)
})

console.log(resArray);







