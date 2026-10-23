const buttonElement = document.querySelector('.button')

buttonElement.addEventListener('mousemove', () => {
    console.log('mouse moving')
})

buttonElement.addEventListener('mouseover', (event) => {
    console.log('mouse over button element')
    console.log('target', event.target) //навели на кнопку
    console.log('relatedTarget', event.relatedTarget) //место откуда навели на кнопку  
})

buttonElement.addEventListener('mouseout', (event) => {
    console.log('mouse out of button element')
    console.log('target', event.target) //кнопка, увели мышку с кнопки
    console.log('relatedTarget', event.relatedTarget) //место, куда навели кнопку 
})


buttonElement.addEventListener("mouseenter", () => {
    console.log('mouse enters box-2') 
})

buttonElement.addEventListener("mouseleave", () => {
    console.log('mouse leaves box-2')
})

buttonElement.addEventListener('mousedown', () => {
    console.log("1. mousedown")
})

buttonElement.addEventListener('mouseup', () => {
    console.log("1. mouseup")
})

buttonElement.addEventListener('click', () => {
    console.log("1. click")
})

//двойной клик
buttonElement.addEventListener('dblclick', () => {
    console.log('dblclick')
})

//нажатие на правую кнопку мыши
buttonElement.addEventListener('conextmenu', (event) => {
    //можно убрать вызов контекстного меню
    event.defaultPrevented()
    console.log("contextmenu")
})


