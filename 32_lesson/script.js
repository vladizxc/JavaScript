/**
 * Примеры событий:
 *  click 
 *  scroll
 *  keydown / keyup
 *  mouseover / mouseout
 *  etc
 */

// const logAllEvents = () => {
//     console.log(
//         Object
//             .keys(window)
//             .filter((key) => /^on/.test(key))
//             .map((eventName) => eventName.slice(2))
//     )
// }

// logAllEvents()

const logMessage = () => {
    console.log("Click!!!")
}

const buttonElement = document.querySelector('button')
//buttonElement.onclick = logMessage

buttonElement.addEventListener('click', logMessage)

const secondButtonElement = document.querySelector('.button-2')

secondButtonElement.addEventListener('click', () => {
    buttonElement.removeEventListener('click', logMessage)
})

const boxElement = document.querySelector('.box')

boxElement.addEventListener('click', (event) => {
    console.log("click")
    event.stopPropagation()
})

boxElement.addEventListener('click', (event) => {
    console.log("click")
    //останавливает все последующие события этого элемента
    event.stopImmediatePropagation()
})

boxElement.addEventListener('click', () => {
    console.log("click")
}, true )