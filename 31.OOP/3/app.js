// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод reverseString,
// переворачивающий строку, метод upperFirst, возвращающий строку, где первая буква заглавная и
// метод upperEvery, который делает заглавной первую букву каждого слова этой строки.

class WordString {
    constructor(str) {
        this.testString = str
    }
    testString

    reverseString() {
        return this.testString.split('').reverse().join('')
    }

    upperFirst() {
        return this.testString[0].toUpperCase('') + this.testString.slice('1')
    }
    upperEvery() {
        const arr = this.testString.split(' ')
        return arr.map(el => el[0].toUpperCase() + el.slice(1));
    }

}

const wordString = new WordString('tima ')

console.log(wordString.reverseString());
console.log(wordString.upperFirst());

console.log(wordString.upperEvery());


