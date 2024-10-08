// 3. Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута

const tagButton = document.querySelector('button')
const tagInput = document.querySelector('input')

tagButton.addEventListener('click',()=>{
    const valueInput = tagInput.value
    alert(valueInput)    
})