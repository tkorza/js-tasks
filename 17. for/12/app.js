// 12. На входе число n – кол-во случайных элементов. Выведите n случайных целых чисел от 1 до 100, используя Math.random().

let n = prompt()
let a = 0
for (i = 0; i < n; i++) {
    a = Math.random() * 100
    console.log(Math.round(a))
}


