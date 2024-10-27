// 7. На вход программе подается число в двоичной системе счисления. Необходимо
// преобразовать его в десятичную систему счисления

const input1 = document.querySelector('.input1')

const button = document.querySelector('button')
const resultP = document.querySelector('.result')

const isValid = () => {
    const uNumber = '23456789'
    if (input1.value.length == 0) throw new Error('Ничего не введено!')
    if (isNaN(input1.value)) throw new Error('значение должно быть числовым!')
    input1.value.split('').forEach(element => {
        if (uNumber.includes(element)) throw new Error('число не в двоичной системе!')
    });
}
button.addEventListener('click', () => {
    try {
        isValid()
        let sum = 0
        let st = 0
        let arr = input1.value.split('')

        for (let i = arr.length - 1; i >= 0; i--) {
            sum += arr[i] * (2 ** st)
            st++
        }

        resultP.textContent = sum
    }
    catch (error) {
        resultP.textContent = error
    }
})





