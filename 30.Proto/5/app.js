// 5. По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false

const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const button = document.querySelector('button')
const resultP = document.querySelector('.result')

const isValid = () => {
    if (input1.value.length == 0) throw new Error('Input1 пустой!')
    if (input2.value.length == 0) throw new Error('Input2 пустой!')
}
button.addEventListener('click', () => {
    try {
        isValid()
        let result
        let arrInput1 = input1.value.split('')
        let arrInput2 = input2.value.split('')
        if (arrInput1.length > arrInput2.length) {
            for (let i = 0; i < arrInput2.length; i++) {
                if (!arrInput1.includes(arrInput2[i])) {
                    result = false
                    console.log(false);
                }
                else result = true
            }
        } else {
            for (let i = 0; i < arrInput1.length; i++) {
                if (!arrInput2.includes(arrInput1[i])) result = false
                else result = true
            }
        }
        resultP.textContent = result

    }
    catch (error) {
        resultP.textContent = error
    }
})





