// 10. Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.
let vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'y']

let str: string[] = ['minsky', 'way', 'planet', 'flowers']
let testStr: string[] = []
let _resArr: string[] = []
for (let i: number = 0; i < str.length; i++) {

    str[i].split('').forEach(elem => {
        if (vowels.includes(elem)) testStr.push(elem)
    })
    _resArr.push(testStr.join(''))
    testStr = []
}

console.log(_resArr);



