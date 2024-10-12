// 1. На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необъодимо отловить на какой из элементов нажал
// пользователь и отобразить

const tag = document.querySelector('div')
const p = document.querySelector('.result')

tag.addEventListener('click', (event) => {
    p.textContent = event.target.textContent
})