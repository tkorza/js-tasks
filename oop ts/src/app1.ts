// 1. Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Создайте экземпляр класса Student и выведите
// свойства.
interface Person {
    name: string,
    age: number
}

class Student {
    name: string
    age: number

    constructor(Name: string, Age: number) {
        this.name = Name
        this.age = Age
    }

    show() {
        console.log(this.name + ' ' + this.age);
    }
}

const student: Person = new Student('tim', 20)
console.log(student.name, student.age);
