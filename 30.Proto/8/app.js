// 8. На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Необходимо вывести количество пар ключ значение объекта)

const input1 = document.querySelector('.input1')
const button = document.querySelector('button')
const resultP = document.querySelector('.result')
const resultObject = document.querySelector('.obj')

const isValid = () => {
    if (isNaN(input1.value)) throw new Error('значение должно быть числовым!')
    if (input1.value.length == 0) throw new Error('Ничего не введено!')
}

button.addEventListener('click', () => {
    try {
        isValid()
        const obj = {}
        let n = input1.value
        let rand = Math.round(Math.random() * n)
        for (let i = 0; i < rand; i++) {
            obj[i] = Math.round(Math.random() * n)
        }
        resultObject.textContent = Object.entries(obj)
        resultP.textContent = Object.keys(obj).length

        console.log(obj);
        console.log(Object.keys(obj).length);
    }
    catch (error) {
        resultP.textContent = error
    }
})





