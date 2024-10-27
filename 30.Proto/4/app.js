// 4. По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
// CamelCase (примерСтрокиВCamelCase )

//

const input = document.querySelector('input')
const button = document.querySelector('button')
const result = document.querySelector('.result')

const isValid = () => {
    if (input.value.length == 0) throw new Error('Вы ничего не ввели!')
    if (!isNaN(input.value)) throw new Error('Вы ввели не строку!')
}

button.addEventListener('click', () => {
    try {
        isValid()
        const stringToArr = input.value.split(' ')
        const resultValue = [stringToArr[0]]
        for (let i = 1; i < stringToArr.length; i++) {
            resultValue.push(stringToArr[i][0].toUpperCase() + stringToArr[i].slice(1))
        }

        result.textContent = resultValue.join('')
        input.value = null
    }

    catch (error) {
        result.textContent = error
    }
})

