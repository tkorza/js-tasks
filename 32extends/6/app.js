// 6. Создайте класс SentenceRepository, который имеет массив строк sentences. Наследуйте от него
// класс LongestSentence, добавив метод getLongestSentence(), который возвращает самую длинную
// строку по количеству символов.
// Входные:
// const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
// repo.getLongestSentence();
// → Результат: "This is a longer sentence"
// Входные:
// const repo = new LongestSentence(["JavaScript is fun", "Coding", "Learning new things"]);
// repo.getLongestSentence();
// → Результат: "JavaScript is fun"
// Входные:
// const repo = new LongestSentence(["Small", "Medium sized", "A sentence that is quite long"]);
// repo.getLongestSentence();
// → Результат: "A sentence that is quite long"

// class SentenceRepository {
//     arrStr = ["JavaScript is fun", "Coding", "Learning new things"]
// }


// class LongestSentence extends SentenceRepository {
//     getLongestSentence() {
//         let longerStr = ''
//         this.arrStr.forEach(el => {
//             if (el.length > longerStr.length) longerStr = el
//         })
//         return longerStr
//     }
// }

// const longestSentence = new LongestSentence
// console.log(longestSentence.getLongestSentence())

///////////////////////////////////////////////


class SentenceRepository {
    arrStr = ["JavaScript is fun", "Coding", "Learning new things"]
}


class LongestSentence extends SentenceRepository {
    getLongestSentence() {
        let longerStr = ''
        this.arrStr.forEach(el => {
            if (el.length > longerStr.length) longerStr = el
        })
        return longerStr
    }
}

const longestSentence = new LongestSentence
console.log(longestSentence.getLongestSentence())
