// 5. Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
// класс PalindromeChecker, который будет проверять, является ли это число палиндромом.
// Входные: new PalindromeChecker(-121) → Результат: false
// Входные: new PalindromeChecker(10) → Результат: false
// Входные: new PalindromeChecker(12321) → Результат: true

// class Number {
//     value = 121

// }

// class PalindromeChecker extends Number {
//     check() {
//         return String(this.value).split('').reverse().join('') === String(this.value)
//     }
// }

// const palindromeChecker = new PalindromeChecker()
// console.log(palindromeChecker.check());

class Number {
    value
    constructor(value) {
        this.value = value
    }

}

class PalindromeChecker extends Number {
    constructor(value) {
        super(value)
        
    }
    check() {
        return String(this.value).split('').reverse().join('') === String(this.value)
    }
}

const palindromeChecker = new PalindromeChecker(121)
console.log(palindromeChecker.check());
