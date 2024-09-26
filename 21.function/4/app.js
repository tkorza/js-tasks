// 4. Напишите функцию, которая принимает статичный массив строк. Необходимо отфильтровать
// значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]
let a = ['by', 'belarus', 'de', 'ru', 'germany']

// function doName(arr){
//     let result = []
//     for(let el of arr){
//         if(el.length<=2){
//             result.push(el)
//         }
//     }

//     return result
// }

const doName = (arr) => arr.filter((el) => el.length <= 2)

console.log(doName(a));

