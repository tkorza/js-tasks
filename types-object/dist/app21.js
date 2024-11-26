// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.
let _str = 'Напишите программу которая находит и выводит длину наиболее длинного слова в заданной строке';
let theLongerWord = '';
let ArrStr = _str.split(' ');
for (let i = 0; i < ArrStr.length; i++) {
    if (ArrStr[i].length > theLongerWord.length)
        theLongerWord = ArrStr[i];
}
console.log(theLongerWord);
