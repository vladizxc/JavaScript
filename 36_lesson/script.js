document.addEventListener("keydown", (event) => {
    console.log("keydown event:", event)
})

document.addEventListener("keyup", (event) => {
    console.log("keydown event:", event)
})

document.addEventListener('keydown', (event) => {
    const { code, metaKey } = event
    
    /**
     * Обработка нажатия на PageDown
     */
    if (
        code === "ArrowDown" && metaKey ||
        code === "Numpad3"
    ) {
        event.preventDefault()
    }

})

document.addEventListener('keydown', (event) => {
    if (event.target.matches('input')){
        const anyDigitRegExp = /\d/

        if (anyDigitRegExp.test(event.key)) {
            event.preventDefault()
            console.log('Отменен ввод цифры:', event.key)
        }
    }
    
})

const inputElement = document.addEventListener("input")
const nameOutputElement = document.querySelector(".name-output")

inputElement.addEventListener("input", (event) => {
    nameOutputElement.textContent = inputElement.value
})

const errorMessageElement = document.querySelector('error-message')

inputElement.addEventListener('change', () => {
    const isInvalid = inputElement.value.length < 5

    inputElement.classList.toggle('is-invalid', isInvalid)
    errorMessageElement.textContent = isInvalid
        ? "max length - 5 symbols"
        : "" 
})

document.addEventListener("cut", (event) => {
    console.log("cut", event)

    navigator.clipboard.readText().then((clipboardText) => {
        console.log("clipboardText:", clipboardText)
    })
})

document.addEventListener("copy", (event) => {
    console.log("copy", event)

    navigator.clipboard.readText().then((clipboardText) => {
        console.log("clipboardText:", clipboardText)
    })
})

document.addEventListener("paste", (event) => {
    console.log("paste", event)

    navigator.clipboard.readText().then((clipboardText) => {
        console.log("clipboardText:", clipboardText)
    })
})