// Создайте класс StringCompressor с методом compress(str), который сжимает строку, заменяя последовательности одинаковых символов
// на символ и количество повторений. Например, "aaabbc" превращается в "a3b2c1".

class StringCompressor {
    str
    constructor(strTest) {
        this.str = strTest
    }
    obj = {}
    compress() {
        for (let i = 0; i < this.str.length; i++) {
            if (this.obj[this.str[i]]) this.obj[this.str[i]] += 1
            else this.obj[this.str[i]] = 1
        }

        let result =  Object.entries(this.obj).join('')
        
        return result.split(',').join('')
    }
}

const stringCompressor = new StringCompressor('aaabbca')
console.log(stringCompressor.compress());

