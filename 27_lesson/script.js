const formElement = document.querySelector(".form")
const loginInputElement = document.querySelector(`.for,__input[name="login"]`)
const passwordInputElement = document.querySelector(`.for,__input[name="password"]`)
const submitButtonElement = document.querySelector(".form_button")

console.dir(formElement)
console.dir(loginInputElement)
console.dir(passwordInputElement)
console.dir(submitButtonElement)

//получение аттрибута (getter)
formElement.action

//изменение аттрибута (setter)
formElement.action = `/register`



console.log(`formElement querty:`, 
    //точное название аттрибута из разметки
    formElement.getAttribute(`querty`)
)

//изменение аттрибута
formElement.setAttribute(`querty`, `0`)

//полное удаление аттрибута
formElement.removeAttribute(`querty`)

//проверка на наличие аттрибута
formElement.hasAttribute(`querty`)

//необычное поведение атрибута value
loginInputElement.value = `admin`

loginInputElement.getAttribute(`value`) //null

//но если обратиться к value как к свойству
loginInputElement.value // value = "admin"

//если через setter 
loginInputElement.setAttribute(`value`, `admin`)

//то оба способа покажут одинаковый результат
loginInputElement.getAttribute(`value`) // value = "admin"

//но если обратиться к value как к свойству
loginInputElement.value // value = "admin"


//синхронизация работает
loginInputElement.setAttribute(`value`, `admin`)
loginInputElement.value 

//синхронизация НЕ работает
loginInputElement.value = `admin`
loginInputElement.getAttribute(`value`)


//получение всех атрибутов
//но обратиться к таким аттрибутам нельзя 
loginInputElement.attributes


//в свойстве dataset будет перечислен обьект
//со свойствами, которые пишутся в CamelCase 
//и стоят после дефиса data-
loginInputElement.dataset 

//к ним можно обращаться и изменять
loginInputElement.dataset.name = "max"

const sliderElement = document.querySelector(`[data-js-slider]`)
//если обратиться через getter то мы получим просто строку
const sliderParams = sliderElement.getAttribute(`data-js-slider`)
//но если запарсить в JSON объект, то можно обращаться к его свойствам
const sliderParams = JSON.parse(sliderElement.getAttribute(`data-js-slider`))