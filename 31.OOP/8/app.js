// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет. Если является - возвращает true, если не является -
// то false.

///////////1 способ

// class Validator {
//     constructor(str){
//         this.str_ =  str.trim()
//     }
//     str_

//     isEmail(){
//         if(/[a-zA-z]*\@[a-z]*\.[a-z]*/gm.test(this.str_)) return true
//         else return false
//     }
// }

// const validator = new Validator('tkorza@inbox.ru')

// console.log(validator.isEmail());

///////////2 способ


class Validator {
    isEmail(str) {
        if (/[a-zA-z]*\@[a-z]*\.[a-z]*/gm.test(str)) return true
        else return false
    }
}

const validator = new Validator()
console.log(validator.isEmail('tkorza@inbox.ru'));
