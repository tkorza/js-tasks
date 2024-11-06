// 4. Создайте класс StringRepository, который имеет статичный массив words ["apple", "apricot", "lemon",
//     "mango", "nectarine", "banana", "kiwi", "plum"]. Наследуйте от него класс FilteredWords, добавив метод
//     getWordsByLength(length), который возвращает только те слова, длина которых равна заданному
//     значению.
//     Входные:
//     const repo = new FilteredWords();
//     repo.getWordsByLength(5);
//     → Результат: ["apple", "lemon", "mango"]

// class StringRepository {
//     words = ["apple", "apricot", "lemon", "mango", "nectarine", "banana", "kiwi", "plum"]
// }

// class FilteredWords extends StringRepository {
//     getWordsByLength(length) {
//         const result = this.words.filter(el => {
//             if (el.length === length) return true
//         })

//         return result
//     }
// }

// const filteredWords = new FilteredWords()

// console.log(filteredWords.getWordsByLength(4))


//////////////////////////////////////////////////////////////////


class StringRepository {
    words = ["apple", "apricot", "lemon", "mango", "nectarine", "banana", "kiwi", "plum"]
}

class FilteredWords extends StringRepository {

    length = 4
    getWordsByLength() {
        const result = this.words.filter(el => {
            if (el.length === this.length) return true
        })

        return result
    }
}

const filteredWords = new FilteredWords()

console.log(filteredWords.getWordsByLength())



