// 9 Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// возвращается первая картинка
const imgTag = document.querySelector('img')

imgTag.addEventListener('mouseover',()=>{
    imgTag.src = './57d082ae9774ffeb8a409a788e05fef3.png'
})

imgTag.addEventListener('mouseout',()=>{
    imgTag.src = './8a8302168e0dc8efadd5c0e341d47215.png'
})