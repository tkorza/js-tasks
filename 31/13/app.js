const btnArr = document.querySelectorAll('button')
const div = document.querySelector('div')
const text = document.querySelector('.text')
const price = document.querySelector('.price')

let current = false

const arr = [
    {
        tittle: 'coffee',
        price: '$4'
    },
    {
        tittle: 'cappuccino',
        price: '$5'
    },
    {
        tittle: 'raf',
        price: '$6'
    }
]

btnArr.forEach(el => {
    el.addEventListener('click', () => {
        const res = arr.filter(elem => {
            if (elem.tittle === el.textContent) return true
        })
    
        text.textContent = res[0].tittle
        price.textContent = res[0].price
        
        if (!current) {
            div.style = 'display:block'
            current = true

        }
        else {
            div.style = 'display:none'
            current = false
        }
    })
})
