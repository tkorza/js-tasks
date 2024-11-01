// 7. Пользователь вводит три числа: a, b и c. Напишите класс, которая определяет, является ли тройка
// чисел сторонами треугольника. Для этого следует проверить следующие условия:
// 1. Сумма двух сторон должна быть больше третьей стороны. (a + b > c, a + c > b, b + c > a)
// 2. Если это так, то далее определить, какой тип треугольника можно построить:
// • Если все три стороны равны, выведите Равносторонний треугольник.
// • Если две стороны равны, выведите Равнобедренный треугольник.
// • Если все три стороны разные, выведите Разносторонний треугольник

//////////////////1 cпособ

class Triangle {
    constructor(A, B, C) {
        this.a = A
        this.b = B
        this.c = C
    }
    a
    b
    c
    check() {
        if (this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a) return true
        else return false
    }
    typeTriangle() {
        try {
            if (this.a === 0 || this.b === 0 || this.c === 0) throw new Error("Ничего не введено!")
            if (isNaN(this.a) || isNaN(this.b) || isNaN(this.c)) throw new Error("Введено не число!")
            if (this.check()) {
                if (this.a === this.b && this.a === this.c && this.b === this.c) return ('равноcторонний треугольник');
                else if (this.a === this.b || this.a === this.c || this.b === this.c) return (('равнобедренный треугольник'));
                else return ('разносторонний треугольник');
            } else return 'треугольник не существует!'
        } catch (error) {
            return error
        }

    }
}

let a = +prompt('Введите 1 сторону')
let b = +prompt('Введите 2 сторону')
let c = +prompt('Введите 3 сторону')

const triangle = new Triangle(a, b, c)

console.log(triangle.typeTriangle())

//////////////////1 cпособ

// class Triangle {
//     check(a, b, c) {
//         if (a + b > c && a + c > b && b + c > a) return true
//         else return false
//     }
//     typeTriangle(a, b, c) {
//         try {
//             if (a === 0 || b === 0 || c === 0) throw new Error("Ничего не введено!")
//             if (isNaN(a) || isNaN(b) || isNaN(c)) throw new Error("Введено не число!")
//             if (this.check(a, b, c)) {
//                 if (a === b && a === c && b === c) return ('равноcторонний треугольник');
//                 else if (a === b || a === c || b === c) return (('равнобедренный треугольник'));
//                 else return ('разносторонний треугольник');
//             } else return 'треугольник не существует!'
//         } catch (error) {
//             return error
//         }

//     }
// }

// let a = +prompt('Введите 1 сторону')
// let b = +prompt('Введите 2 сторону')
// let c = +prompt('Введите 3 сторону')

// const triangle = new Triangle()

// console.log(triangle.typeTriangle(a, b, c))

