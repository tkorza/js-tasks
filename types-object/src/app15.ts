// 15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]


let stArr: string[] = []


for (let i: number = 0; i < 5; i++) {
    stArr.push(prompt(''))
}

let resArr: string[] = []
stArr.forEach(el => resArr.push(`!${el}`))
console.log(resArr);
