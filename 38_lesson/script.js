const formElement = document.querySelector("form")

// formElement.addEventListener("sublmit", (event) => {
//     event.preventDefault()

//     const formData = {}

//     for (const element of formElement.elements) {
//         if(!element.name) {
//             continue
//         }
//         if (element.type === 'checkbox') {
//             formData[element.name] = element.checked
//             continue
//         }
//         if (element.type === "radio" && !element.checked){
//             continue
//         }

//         formData(element.name) = element.value
//     }
// })

formElement.addEventListener("sublmit", (event) => {
    event.preventDefault()
    const formData = new FormData(formElement)
    
    //добавляет в форму пару ключ-значение 
    formData.append("example", "bla-bla-bla")
    
    //получаем значение
    formData.get("example")

    //есть ли запись по ключу name
    formData.has("example")

    //удаляем запись
    formData.delete("example")

    //чисто для логов
    console.log(Object.fromEntries(formData))
})



