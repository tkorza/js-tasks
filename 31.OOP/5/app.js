// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв
//     исходного слова или фразы). Создать функцию для вывода ряда true, если слова являются
//     анаграммами. Добавить проверки на ввод

/////////////////////////1 способ//////////////
// class Anagram {
//     str1 = 'tima'
//     str2 = 'tami'
//     isValid() {
//         if (this.str1.length === 0 || this.str2.length === 0) return 'Ничего не введено!!'
//         if (!isNaN(this.str1) || !isNaN(this.str2)) return 'Введено не число!!'
//     }
//     isAnagram() {
//         const check = this.isValid()
//         if (check === undefined) {
//             if (this.str1.split('').sort().join('') === this.str2.split('').sort().join('')) return true
//             else return false
//         } else return check
//     }

// }
// const anagram = new Anagram()
// console.log(anagram.isAnagram());

/////////////////////////2 способ//////////////

// class Anagram {
//     constructor(a1, a2) {
//         this.str1 = a1
//         this.str2 = a2
//     }
//     str1
//     str2
//     isValid() {
//         if (this.str1.length === 0 || this.str2.length === 0) return 'Ничего не введено!!'
//         if (!isNaN(this.str1) || !isNaN(this.str2)) return 'Введено не число!!'
//     }
//     isAnagram() {
//         const check = this.isValid()
//         if (check === undefined) {
//             if (this.str1.split('').sort().join('') === this.str2.split('').sort().join('')) return true
//             else return false
//         } else return check
//     }

// }
// const anagram = new Anagram('tima', 'amit')
// console.log(anagram.isAnagram());


/////////////////////////3 способ//////////////


class Anagram {
    isValid(str1, str2) {
        if (str1.length === 0 || str2.length === 0) return 'Ничего не введено!!'
        if (!isNaN(this.str1) || !isNaN(this.str2)) return 'Введено не число!!'
    }
    isAnagram(str1, str2) {
        const check = this.isValid(str1, str2)
        if (check === undefined) {
            if (str1.split('').sort().join('') === str2.split('').sort().join('')) return true
            else return false
        } else return check
    }

}
const anagram = new Anagram()
console.log(anagram.isAnagram('tima', 'amit'));