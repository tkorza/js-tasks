// 2. Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.

let arrStr: string[] = ['ttt', 'sss', 'ggga', 'aaaa']

for (let i: number = 0; i < arrStr.length; i++) {
    if (arrStr[i].includes('a')) console.log(arrStr[i]);
}