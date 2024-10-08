// 8. У вас есть кнопка. После нажатия поменять background. 

const tagButton = document.querySelector('button')
const arrColor = [ 'white','red']
let switColor = 0

tagButton.addEventListener('click', () => {
    if(switColor==0){
        tagButton.style = `background-color: ${arrColor[1]}`
        switColor = 1
    }
    else{
        tagButton.style = `background-color: ${arrColor[0]}`
        switColor = 0
    }
})
