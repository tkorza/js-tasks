// 3. Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст
// должен показываться или скрываться.

const divTag  = document.querySelector('div')
const pTag = document.querySelector('.content')
let boolean = true 
const contentP = pTag.textContent


divTag.addEventListener('click',(event)=>{
    if(boolean){
        pTag.textContent = ''
        boolean = false
    } else {
        pTag.textContent = contentP
        boolean = true
    }
})