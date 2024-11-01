// 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел, разность,
// произведение, частное. 2 числа передаются в класс, далее вызываеются соответствующие
// функции. Добавить проверки на ввод

class Calculator {
    constructor(a1, a2) {
        this.a1 = a1
        this.a2 = a2
    }
    isValid() {
        if (isNaN(this.a1.length === 0 || this.a2.length === 0)) return 'Ничего не введено!'
        if (isNaN(this.a1) || isNaN(this.a2)) return 'Введено не число!'
    }

    a1
    a2
    sum() {
        const check = this.isValid()
        if (check === undefined) return `сумма: ${this.a1 + this.a2}`;
        else return check
    }
    razn() {
        const check = this.isValid()
        if (check === undefined) return 'разность:' + Math.abs(this.a1 - this.a2);
        else return check
    }

    pr() {
        const check = this.isValid()

        if (check === undefined) return `произведение: ${this.a1 * this.a2}`;
        else return check

    }
    chastn() {
        const check = this.isValid()
        if (check === undefined) {
            if (this.a1 > this.a2) return `частное: ${this.a1 / this.a2}`;
            else return `частное: ${this.a2 / this.a1}`;
        } else return check

    }
}

const calculator = new Calculator(6, 'f')
console.log(calculator.sum());
console.log(calculator.razn());
console.log(calculator.pr());
console.log(calculator.chastn());





