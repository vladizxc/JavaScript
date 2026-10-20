//возвращает первый найденый элемент по id или null 
//const buttonElement = document.getElementById("myButton")

//если в разметке есть элемент с таким id и он единственный
//то мы можем найти его и так
//условие: camelCase, если через дефис, то не найдет
//так же в коде не должно существовать переменной с таким 
//названием
//console.log("Button", myButton)


//передается строка с css-селектором 
//если у селектора есть id то можно передать id "#myButton"
//если есть class, то можно передать через ".my-button"
const buttonElement = document.querySelector("button")

//если нам нужно несколько элементов 
//возвращает Node-list
const listItemElements = document.querySelectorAll(".list .items")

//этот список можно перебрать
listItemElements.forEach((element) => {
    console.log("Element of the list: ", element)
})

const wrapperElement = document.querySelector("#wrapper")
console.log("wrappedElement:", wrapperElement)

const listElement = wrapperElement.querySelector(".list")
console.log("listElement:", listElement)

const listItemElements = listElement.querySelectorAll(".item")
console.log("listItemElements:", listItemElements)



const thirdBoxElement = document.querySelector(".box-3")

const firstBoxElement = thirdBoxElement.closest(".box-1")


const listItemElements = document.querySelectorAll(`
    .box-1,
    .box-2,
    .box-3,
`)

//возвращает список элементов, как живые коллекции 
//по тегу
const formElements = document.getElementsByTagName("form")
//по имени класса
const radioGroupelements = document.getElementsByClassName("radio-group")
//по имени name
const inputElements = document.getElementsByName("specialization")


const sliderElement = document.querySelector(`[data-js-slider]`)