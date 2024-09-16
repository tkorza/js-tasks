// 10. На входе строка. Необходимо создать функцию, возвращающую true, если это слово палиндром и
// false в противном случае

let str = 'tit'

const isPalindrom = (str) => str == str.split('').reverse().join('')
console.log(isPalindrom(str));
