// у вас есть в классе 2 числа. ваша задача написать 4 метода для работы
//  с этими чсислами: сложение, выч, умн, дел

class test {
    number1 = 3
    number2 = 2
    sum() {
        console.log(this.number1 + this.number2)
    }
    razn() {
        console.log(Math.abs(this.number1 - this.number2))
    }
    pr() {
        console.log(Math.abs(this.number1 * this.number2))
    }
    del() {
        if (this.number2 > this.number1) {
            console.log(this.number1 / this.number2)
        }
        if (this.number2 < this.number1) {
            console.log(this.number2 / this.number1)
        }
    }
}

const test1 = new test()
test1.sum()
test1.razn()
test1.pr()
test1.del()
