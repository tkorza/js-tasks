// 6. Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на
//  кнопку заменить значение инпута 

const tagButton = document.querySelector('button')
const inputTag = document.querySelector('input')

tagButton.addEventListener('click',()=>{
   inputTag.value = '!!!'
})
