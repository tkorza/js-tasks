// 3. У тебя есть массив строк words, и тебе нужно создать новый массив uppercaseWords, в котором все строки будут записаны в верхнем регистре.

const words = ['tim', 'hanna', 'ksenia', 'potato']

const uppercaseWords = words.map(el => { return el.toLocaleUpperCase() })
console.log( uppercaseWords);
