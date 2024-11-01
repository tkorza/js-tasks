// 9. Реализуйте класс для пересчета временного интервала, заданного в минутах, в величину,
// выраженную в часах и минутах.
// Входные: 150 минут → Результат: 2 часа 30 минут
// Входные: 240 минут → Результат: 4 часа 0 минут

/////////1 cпособ
// class Time {
//     constructor(value) {
//         this.minute = value
//     }
//     minute
//     converterTime() {
//         return `${Math.floor(this.minute / 60)} часа ${this.minute % 60} минут`
//     }
// }

// const time = new Time()

// console.log(time.converterTime())

/////////1 cпособ

class Time {
    converterTime(minute) {
        return `${Math.floor(minute / 60)} часа ${minute % 60} минут`
    }
}

const time = new Time()
console.log(time.converterTime(40));


