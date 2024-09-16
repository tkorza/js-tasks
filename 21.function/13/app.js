// 13. На входе строка. Необходимо создать функцию, возвращающую true, если это слово анаграмма и
// false в противном случае

let str = 'тимоха'
let str2 = 'итмхоа'

// console.log(str.split('').sort().join('') == str2.split('').sort().join(''));


// console.log(str.split('').sort().join(''));
// console.log(str2.split('').sort().join(''));

const checkWord = (a,b) => a.split('').sort().join('') == b.split('').sort().join('')

console.log(checkWord(str,str2));
