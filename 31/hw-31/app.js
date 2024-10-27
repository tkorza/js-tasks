const hot = document.querySelector('.hot')
const cold = document.querySelector('.cold')
const div = document.querySelector('div')

const menu = [
    {title: 'tea',category:'hot'},
    {title: 'coffee',category:'hot'},
    {title: 'soup',category:'hot'},
    {title: 'ice creame',category:'cold'},
    {title: 'juice',category:'cold'},
    {title: 'dessert',category:'cold'}
]

hot.addEventListener('click',()=>{
    div.innerHTML = ''
    const result = menu.filter(el=>el.category === hot.textContent)
    result.forEach(el=>{
        const p = document.createElement('p')
        p.textContent = `${el.title}`
        div.appendChild(p)
    })
})

cold.addEventListener('click',()=>{
    div.innerHTML = ''
    const result = menu.filter(el=>el.category === cold.textContent)
    result.forEach(el=>{
        const p = document.createElement('p')
        p.textContent = `${el.title}`
        div.appendChild(p)
    })
})
// div.innerHTML = `<p>${result.title}</p>`
