// 6. Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.
// interface calc {
//     add(): number
//     subtract(): number
//     multiply(): number
//     divide(): number
// }
class Calculator {
    isValid(a1, a2) {
        if (!a1 || !a2)
            throw new Error('Ничего не введено!');
        if (isNaN(a1) || isNaN(a2))
            throw new Error('Введено не число');
        if (a1 < 0 || a2 < 0)
            throw new Error('Введено отрицательное число!');
        return true;
    }
    add(a1, a2) {
        try {
            this.isValid(a1, a2);
            return a1 + a2;
        }
        catch (error) {
            console.log(error);
        }
    }
    subtract(a1, a2) {
        try {
            this.isValid(a1, a2);
            return Math.abs(a1 - a2);
        }
        catch (error) {
            console.log(error);
        }
    }
    multiply(a1, a2) {
        try {
            this.isValid(a1, a2);
            return a1 * a2;
        }
        catch (error) {
            console.log(error);
        }
    }
    divide(a1, a2) {
        try {
            this.isValid(a1, a2);
            return a1 / a2;
        }
        catch (error) {
            console.log(error);
        }
    }
}
const calculator = new Calculator();
console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));
console.log(calculator.divide(5, 3));
