// 6. Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.
// interface calc {
//     add(): number
//     subtract(): number
//     multiply(): number
//     divide(): number
// }

// class Calculator {
//     value1: number
//     value2: number

//     constructor(a1: number, a2: number) {
//         this.value1 = a1
//         this.value2 = a2
//     }

//     isValid(): boolean | never {
//         if (!this.value1 || !this.value2) throw new Error('Ничего не введено!')
//         if (isNaN(this.value1) || isNaN(this.value2)) throw new Error('Введено не число')
//         if (this.value1 < 0 || this.value2 < 0) throw new Error('Введено отрицательное число!')
//         return true
//     }

//     add(): number {
//         try {
//             this.isValid()
//             return this.value1 + this.value2
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     subtract() {
//         try {
//             this.isValid()
//             return Math.abs(this.value1 - this.value2)
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     multiply() {
//         try {
//             this.isValid()
//             return this.value1 * this.value2
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     divide() {
//         try {
//             this.isValid()
//             return this.value1 / this.value2
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// const calculator: calc = new Calculator(5, 4)

// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());

interface calc {
    add(a1: number, a2: number): number
    subtract(a1: number, a2: number): number
    multiply(a1: number, a2: number): number
    divide(a1: number, a2: number): number
}

class Calculator {
    isValid(a1: number, a2: number): boolean | never {
        if (!a1 || !a2) throw new Error('Ничего не введено!')
        if (isNaN(a1) || isNaN(a2)) throw new Error('Введено не число')
        if (a1 < 0 || a2 < 0) throw new Error('Введено отрицательное число!')
        return true
    }

    add(a1: number, a2: number): number {
        try {
            this.isValid(a1, a2)
            return a1 + a2
        } catch (error) {
            console.log(error);
        }
    }

    subtract(a1: number, a2: number) {
        try {
            this.isValid(a1, a2)
            return Math.abs(a1 - a2)
        } catch (error) {
            console.log(error);
        }
    }

    multiply(a1: number, a2: number) {
        try {
            this.isValid(a1, a2)
            return a1 * a2
        } catch (error) {
            console.log(error);
        }
    }

    divide(a1: number, a2: number) {
        try {
            this.isValid(a1, a2)
            return a1 / a2
        } catch (error) {
            console.log(error);
        }
    }
}

const calculator: calc = new Calculator()

console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));
console.log(calculator.divide(5, 3));

