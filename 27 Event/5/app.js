// 5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи. 

const tag = document.querySelector('button')
const inputTag = document.querySelector('input')
const p = document.querySelector('.v1')

tag.addEventListener('click', () => {
    const val = inputTag.value
    const arrfib = [0, 1]

    if (val > 0 ) {
        for (let i = 2; i < val; i++) {
            arrfib.push(arrfib[i - 1] + arrfib[i - 2])
        }
    }

    console.log(arrfib);
    p.textContent = `Результат: ${arrfib}`
})