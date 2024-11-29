// 6. Создайте интерфейс iValidation, который будет описывать методы для проверки: isValidEmail(),
// isValidDate(), isValidPath(). Создайте класс Validation, который реализует интерфейс iValidation.
// Класс будет иметь публичные методы: isValidEmail(), isValidDate(), isValidPath(). Конструктор класса
// Validation должен принимать параметры email, date, path и инициализировать их как поля класса.
class Validation {
    email;
    date;
    path;
    constructor(email, date, path) {
        this.email = email;
        this.date = date;
        this.path = path;
    }
    isValidEmail() {
        try {
            if (this.email.length === 0)
                throw new Error('Email не введен!');
            if (!(/([a-zA-Z1-9]+\@[a-zA-Z]+\.[a-zA-Z]{2})/gm).test(this.email))
                throw new Error('Неверный формат email');
            return true;
        }
        catch (error) {
            return error;
        }
    }
    isValidDate() {
        try {
            if (this.date.length === 0)
                throw new Error('не введено date!');
            if (!(/(\d{4}\-\d{2}\-\d{2})/gm).test(this.date))
                throw new Error('неверный формат date!');
            return true;
        }
        catch (error) {
            return error;
        }
    }
    isValidPath() {
        try {
            if (this.path.length === 0)
                throw new Error('не введено path!');
            if (!(/((\/[a-zA-Z-0-9]+)+)/gm).test(this.path))
                throw new Error('неверный формат path!');
            return true;
        }
        catch (error) {
            return error;
        }
    }
}
let valid = new Validation('example@mail.com', '2023-09-10', '/usr/local/bin');
console.log(valid.isValidEmail());
console.log(valid.isValidDate());
console.log(valid.isValidPath());
