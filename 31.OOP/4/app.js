// 4. Реализуйте класс MathСalculation. В него передается число n – количество элементов массива. На
// основании числа формируется динамический массив из n элементов внутри класса. Создать
// функцию для подсчета всех четных чисел массива. Добавить проверки на ввод

// class MathСalculation {                                                1 способ
//     constructor(N) {
//         this.n = N
//     }
//     n
//     arr = []
//     addArr() {
//         for (let i = 0; i < this.n; i++) {
//             this.arr.push(Math.round(Math.random() * 10))
//         }
//     }

//     // showArr() {
//     //     console.log(this.arr);
//     // }
// }

// const mathСalculation = new MathСalculation(4)
// mathСalculation.addArr()
// console.log( mathСalculation.arr);

// class MathСalculation {                                             2 способ
//     arr = []
//     addArr(N) {
//         for (let i = 0; i < N; i++) {
//             this.arr.push(Math.round(Math.random() * 10))
//         }
//     }

//     // showArr() {
//     //     console.log(this.arr);
//     // }
// }

// const mathСalculation = new MathСalculation()
// mathСalculation.addArr(4)
// console.log(mathСalculation.arr);

class MathСalculation {
    N = 4
    arr = []
    addArr() {
        for (let i = 0; i < this.N; i++) {
            this.arr.push(Math.round(Math.random() * 10))
        }
    }

    // showArr() {
    //     console.log(this.arr);
    // }
}

const mathСalculation = new MathСalculation()
mathСalculation.addArr()
console.log(mathСalculation.arr);

