// 8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром

let _strArr: string[] = ['fuf', 'feri', 'ffsdd']

let isPalindrom: boolean = false

_strArr.forEach(el => el.split('').reverse().join('') === el ? isPalindrom = true :false)
console.log(isPalindrom);
