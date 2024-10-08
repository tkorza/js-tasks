// 10. После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута

const tagButtonLock = document.querySelector('.lock')
const tagButtonUnlock = document.querySelector('.unlock')
const tagInput = document.querySelector('input')

tagButtonLock.addEventListener('click', () => {
    tagInput.setAttribute('disabled','/')
})

tagButtonUnlock.addEventListener('click', () => {
    tagInput.removeAttribute('disabled')
})  