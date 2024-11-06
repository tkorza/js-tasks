// 2. Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
// getAverageGrade(), который возвращает средний балл студента.
// Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20) имеет средний балл 4.2"
// Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22) имеет средний балл 3.0"
// Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19) имеет средний балл 4.4"


// class Student {
//     constructor(name, age, arr) {
//         this.name = name
//         this.age = age
//         this.arrMark = arr
//     }
//     name
//     age
//     arrMark

//     getAverageGrade = () => {
//         const result = this.arrMark.reduce((el, sum) => sum += el)
//         return `${this.name} (${this.age}) имеет средний балл ${result / this.arrMark.length}`
//     }
// }

// const student = new Student('tim', 20, [1, 2, 3, 4])

// console.log(student.getAverageGrade())

//////////////////////////////////////////////////////////////

// class Student {
//     name = 'tim'
//     age = 20
//     arrMark = [1,2,4]

//     getAverageGrade = () => {
//         const result = this.arrMark.reduce((el, sum) => sum += el)
//         return `${this.name} (${this.age}) имеет средний балл ${result / this.arrMark.length}`
//     }
// }

// const student = new Student()

// console.log(student.getAverageGrade())

//////////////////////////////////////////////////////////////

class Student {
    getAverageGrade = (name, age, arrMark) => {
        const result = arrMark.reduce((el, sum) => sum += el)
        return `${name} (${age}) имеет средний балл ${result / arrMark.length}`
    }
}

const student = new Student()

console.log(student.getAverageGrade('tim', 20, [1, 2, 3, 4]))
