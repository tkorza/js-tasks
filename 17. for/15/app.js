// 15. Преобразуйте первую букву каждого слова в строке в верхний регистр используя цикл for.
// Входные: "hello world" → Результат: "Hello World"
// Входные: "javascript language" → Результат: "Javascript Language“

let str = prompt()

let strArr = str.split(' ') 

let result = ''

for(let i = 0; i<strArr.length; i++){
    result+=strArr[i][0].toUpperCase() + strArr[i].slice(1) +' '
}
console.log(result.trim())