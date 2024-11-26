// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

let _str: string = 'Напишите программу которая находит и выводит длину наиболее длинного слова в заданной строке'

let theLongerWord: string = ''
let ArrStr: string[] = _str.split(' ')
for (let i: number = 0; i < ArrStr.length; i++) {
    if (ArrStr[i].length > theLongerWord.length) theLongerWord = ArrStr[i]
}

console.log(theLongerWord);
