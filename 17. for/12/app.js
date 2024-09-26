// 12. На входе число n – кол-во случайных элементов. Выведите n случайных целых чисел от 1 до 100, используя Math.random().

let n = prompt('Введите n')

for (let i = 1; i <= n; i++) {
    console.log(Math.round(Math.random() * 100));

}
let i = 0
while (i < n) {
    console.log(Math.round(Math.random() * 100));
    i++
}
let i1 = 0
do {
    console.log(Math.round(Math.random() * 100));
    i1++
} while (i1 < n)