// 21. Дан массив оценок (чисел от 1 до 5) [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4]. Необходимо подсчитать, сколько раз 5
// встречается в массиве. Используйте цикл for для итерации по массиву и оператор switch для
// подсчета количества каждой оценки.

let arrMark = [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4]

let markPointer1 = 0
let markPointer2 = 0
let markPointer3 = 0
let markPointer4 = 0
let markPointer5 = 0

for (let i = 0; i < arrMark.length; i++) {
    switch (arrMark[i]) {
        case 1:
            markPointer1++
            break;
        case 2:
            markPointer2++
            break;
        case 3:
            markPointer3++
            break;
        case 4:
            markPointer4++
            break;
        case 5:
            markPointer5++
            break;

        default: 
        console.log('Error')
        break;

    }
}

console.log(markPointer5 + " пятерок")
console.log(markPointer1 + " единиц")
console.log(markPointer2 + " двоек")
console.log(markPointer3 + " троек")
console.log(markPointer4 + " четверок")

