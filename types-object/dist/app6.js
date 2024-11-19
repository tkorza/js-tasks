// 6. Создайте массив строк и объедините все элементы в одну строку без пробелов
// let arrStr_: string[] = ['hs', 'ch', 'oo', 'l']
// console.log(arrStr_.join(''));
let arrStr_ = ['hs', 'ch', 'oo', 'l'];
let strRes = '';
for (let i = 0; i < arrStr_.length; i++) {
    strRes += arrStr_[i];
}
console.log(strRes);
