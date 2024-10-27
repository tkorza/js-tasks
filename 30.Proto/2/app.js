// 3. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый
// ключ – индекс элемента массива, а значение – текущее итерируемое значение
// массива
// [11, 2, 13] – {
// 0: 11,
// 1: 2,
// 2: 13
//  }

const input = document.querySelector('input')
const button = document.querySelector('button')
const result = document.querySelector('.result')
const uniq = document.querySelector('.uniq')

const arr = []
const uniqArr = []

const isValid = () =>{
    if(input.value.length == 0) throw new Error('Вы ничего не ввели!')
    if(!isNaN(input.value)) throw new Error('Вы ввели не строку!')
}

button.addEventListener('click',()=>{
try {
    isValid()
    arr.push(input.value)
    if(!uniqArr.includes(input.value)) uniqArr.push(input.value)
    result.textContent = arr
    uniq.textContent = uniqArr
} 

catch (error) {
    result.textContent = error
}
})

