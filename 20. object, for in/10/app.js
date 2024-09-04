// 10. На входе объект с ключами name, age, birthday, значения которых – пустые строки. Необходимо
// считать данные с клавиатуры и заполнить объект соответствующими данными, добавив проверки
// на ввод.

const obj = { "name": '', "age": '', "birthday": '' }
let arr = []

for (let key in obj) {
    let test
    if (key == 'name') {
        test = prompt('Введите name')
        if (typeof test == 'string') {
            obj[key] = test
        }
    } else if (key == 'age') {
        test = +prompt('Введите age')
        if (typeof test == 'number') {
            obj[key] = test
        }
    } else if (key == 'birthday') {
        test = prompt('Введите birthday')
        if (typeof test == 'string') {
            obj[key] = test
        }
    }
}

for (let key in obj) {
    console.log(key + ' ' + obj[key])
}


