// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.
let str_ = 'fffgggghhhhh';
let objRes = {};
for (let i = 0; i < str_.length; i++) {
    if (objRes[str_[i]]) {
        objRes[str_[i]] += 1;
    }
    else
        objRes[str_[i]] = 1;
}
let indexMax = 0;
let resSymbol = '';
for (let key in objRes) {
    if (objRes[key] > indexMax)
        resSymbol = key;
}
console.log(objRes);
console.log(resSymbol);
