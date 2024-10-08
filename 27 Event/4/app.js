// 4. Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
// Проверки на ввод. Обработать ошибки

const tag = document.querySelector('button')
const inputTag = document.querySelector('input')

tag.addEventListener('click', () => {
    try {
        if (!inputTag.value) throw Error('Вы ничего не ввели')
        if (isNaN(inputTag.value)) throw Error('Вы ввели не число!')
        else console.log('Вы ввели число!');


    } catch (error) {
        console.log(error);
    }

})