const loginInputElement = document.querySelector("#login")

loginInputElement.addEventListener("focus", () => {
    console.log("в фокусе: поле ввода логина")
})

loginInputElement.addEventListener("blur", () => {
    console.log("фокус ушел с элемента: поле ввода логина")
})

//практический пример 
loginInputElement.addEventListener("blur", () => {
    const isLoginEmpty = loginInputElement.value.length === 0
    loginInputElement.classList.toggle("is-invalid", isLoginEmpty)
})

loginInputElement.addEventListener("focus", () => {
    loginInputElement.classList.remove("is-invalid")
})

//принудительно берет элемент в фокус
loginInputElement.focus()

setTimeout(() => {
    loginInputElement.blur()
}, 2000)


document.addEventListener("focusin", (event) =>{
    if (event.target.matches("#login")) {
        console.log("focusin event: ", event)
    }
    
})

document.addEventListener("focusout", (event) =>{
    if (event.target.matches("#login")) {
        console.log("focusout event: ", event)
    }
})

