// 6. Создайте форму для регистрации с полями ввода имени, email и пароля.
// Реализуйте валидацию полей и отображение сообщений об ошибках при
// некорректном вводе.
const btnTag = document.querySelector('button')
const nameInput = document.querySelector('.name')
const pswInput = document.querySelector('.psw')
const emailInput = document.querySelector('.email')

const isNotValidValue = (valueInput) => {
    if (!valueInput) return true
    else return false
}

const checkName = (name) => {
    if (name[0] == name[0].toLowerCase()) throw new Error('Имя должно начинаться с большой буквы!')
}
const checkPassword = (psw) => {
    const specialSymbols = '!@#$%^&*()|\\/.,'
    if (psw.length < 7) throw new Error('Пароль должен быть не меньше 7 символов!')
    if (psw == psw.toLowerCase()) throw new Error('Пароль должен содержать хотя бы 1 символ верхнего регистра!')
    if (!psw.split('').some((el) => specialSymbols.includes(el))) throw new Error('Пароль должен содержать хотя бы 1 специальный символ!')
}

const checkMail = (mail) => {
    if (!mail.includes('@')) throw new Error('email должен содержать @')
    if (mail.includes('.com') || mail.includes('.ru') || mail.includes('.by')) return true
    else throw new Error('email должен содержать(.com .by .ru)')
}

btnTag.addEventListener('click', () => {
    try {
        if (isNotValidValue(nameInput.value)) throw new Error('Введите имя!')
        if (isNotValidValue(emailInput.value)) throw new Error('Введите email!')
        if (isNotValidValue(pswInput.value)) throw new Error('Введите пароль!')
        checkName(nameInput.value)
        checkMail(emailInput.value)
        checkPassword(pswInput.value)
        alert('Успешно!')
    } catch (error) {
        alert(error)
    }
})

