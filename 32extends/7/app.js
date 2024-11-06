// 7. Создайте класс Person с атрибутом name. Наследуйте от него класс Employee, добавив атрибуты
// position и monthly_salary. Реализуйте метод getAnnualSalary(), возвращающий годовую зарплату.
// Входные: Employee("Alice", "Developer", 5000) → Результат: 60000
// Входные: Employee("Bob", "Manager", 7000) → Результат: 84000
// Входные: Employee("Charlie", "Designer", 4000) → Результат: 48000

// class Person {
//     name = 'tim'
// }

// class Employee extends Person {
//     position = 'developer'
//     monthly_salary = 3000
//     getAnnualSalary() {
//         return `${this.name} ${this.position} annual salary: ${this.monthly_salary * 12}`
//     }
// }

// const employee = new Employee()
// console.log(employee.getAnnualSalary())

////////////////////////////////////////////

class Person {
    name
}

class Employee extends Person {
    position
    monthly_salary
    getAnnualSalary(Name, Position, MonthlySalary) {
        return `${Name} ${Position} annual salary: ${MonthlySalary * 12}`
    }
}

const employee = new Employee()
console.log(employee.getAnnualSalary('tim', 'developer', 3000))