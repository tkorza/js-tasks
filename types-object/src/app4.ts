// 4. Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.

let arrNu: string[] = []
for (let i: number = 0; i < 5; i++) {
    arrNu.push(prompt(''))
}

let res = arrNu.some(el => el.length > 5)
console.log(res);
