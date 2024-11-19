// Создайте класс PasswordGenerator с методом generate(length), который возвращает строку случайных символов длиной length,
//  включающую заглавные и строчные буквы, цифры и специальные символы.

class PasswordGenerator {
    arr = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789'.split('')
    length 
    constructor(l) {
        this.length = l
    }
    generate() {
        let result = []

        for (let i = 0; i < this.length; i++) {
            result.push(this.arr[Math.round(Math.random() * this.arr.length)])
        }
        return result
    }
}

const pass = new PasswordGenerator(5)
console.log(pass.generate());
