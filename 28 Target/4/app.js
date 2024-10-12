// 4. По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
// границы кнопки сновка скрывать

const divTag = document.querySelector('div')
const pTag = document.querySelector('div p')

divTag.addEventListener('mouseover',(event)=>{
    pTag.textContent = 'Hi'
})

divTag.addEventListener('mouseout',(event)=>{
    pTag.textContent = ''
})