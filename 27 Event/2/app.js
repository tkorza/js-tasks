// 2. Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут со
// значением по-умолчанию «+375(хх)ххх-хх-хх». По клику на кнопку заменить
// значение инпута на «+375(29)111-11-11»

const tagButton = document.querySelector('button')
const tagInput = document.querySelector('input')


tagButton.addEventListener('click',()=>{
    tagInput.value = '+375(29)111-11-11'
})
