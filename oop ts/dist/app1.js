class Student {
    name;
    age;
    constructor(Name, Age) {
        this.name = Name;
        this.age = Age;
    }
    show() {
        console.log(this.name + ' ' + this.age);
    }
}
const student = new Student('tim', 20);
console.log(student.name, student.age);
