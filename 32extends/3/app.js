// 3. Создайте класс Car с параметрами make, model, year. Напишите метод getCarAge(currentYear),
// который возвращает возраст машины.
// Входные: Car("Toyota", "Camry", 2015) → Результат: Возраст машины: 9 лет
// Входные: Car("Honda", "Civic", 2020) → Результат: Возраст машины: 4 года
// Входные: Car("Ford", "Mustang", 1967) → Результат: Возраст машины: 57 лет


class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    make
    model
    year


    getCarAge() {
        return `возраст машины: ${2024 - this.year} лет `
    }
}
const car = new Car('bm', 'ff', 2000)
log(car.getCarAge())