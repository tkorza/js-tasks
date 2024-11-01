// 6. Реализуйте класс, который находит полное число метров по заданному числу сантиметров.
// Добавьте проверку на ввод только чисел.
// Входные: 345 → Результат: 3 метров
// Входные: 100 → Результат: 1 метр
// Входные: 99 → Результат: 0 метров
// Входные: 750 → Результат: 7 метров
// Входные: 10 → Результат: 0 метров
// Входные: hi → Результат: Вы ввели не число!

//////////////1 cпособ///////////////////////////

// class hschool {
//     constructor(smValue) {
//         this.sm = smValue
//     }
//     sm
//     isValid() {
//         if (this.sm.length === 0) return 'Ничего не введено!'
//         if (!isNaN(this.sm)) return 'Введена не строка!'
//     }
//     mValue() {
//         const check = this.isValid()
//         if (check === undefined) {
//             return `${Math.floor(this.sm / 100)} метров`
//         } else return check
//     }
// }

// const hschool1 = new hschool(690)
// console.log(hschool1.mValue());

//////////////2 cпособ///////////////////////////

// class hschool {
//     sm = 50
//     isValid() {
//         if (this.sm.length === 0) return 'Ничего не введено!'
//         if (!isNaN(this.sm)) return 'Введена не строка!'
//     }
//     mValue() {
//         const check = this.isValid()
//         if (check === undefined) {
//             return `${Math.floor(this.sm / 100)} метров`
//         } else return check
//     }
// }

// const hschool1 = new hschool()
// console.log(hschool1.mValue());

//////////////3 cпособ///////////////////////////


class hschool {
    isValid(sm) {
        if (!sm) return 'Ничего не введено!'
        if (isNaN(sm)) return 'Введена строка!'
    }
    mValue(sm) {
        const check = this.isValid(sm)
        if (check === undefined) {
            return `${Math.floor(sm / 100)} метров`
        } else return check

    }
}

const hschool1 = new hschool()
console.log(hschool1.mValue('f'));


