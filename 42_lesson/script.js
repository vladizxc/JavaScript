//предоставляет информацию о текущей URL страницы
console.log(window.location)

//перезагружает страницу
window.location.reload()

//можно вернуться на страницу с которой был вызван
window.location.assign("./index.html")
//вернуться назад нельзя, так как не сохраняет в истории
//возвращает на два шага назад
window.location.replace("./index.html")

document.addEventListener("click", (event) => {
    if(event.target.href) {
        event.preventDefault()
        window.location.href = event.target.href
    }
})

//history api сохраняет страницы. которые были посещены

const backButterElement = document
    .getElementById("back-button")

const forwardButtonElement = document
    .getElementById("forward-button")

//возращает на прошлую страницу
backButterElement.addEventListener("click", () => {
    window.history.back()
})

//на следующую страницу
forwardButtonElement.addEventListener("click", () => {
    window.history.forward()
})

//назад на 2 шага назад
backButterElement.addEventListener("click", () => {
    window.history.go(-2)
})

//назад на 3 шага вперед
backButterElement.addEventListener("click", () => {
    window.history.go(3)
})

const addToHistoryButtonElement = document
    .getElementById("add-to-history")

const showHistoryButtonElement = document
    .getElementById("show-history")

//добавляем новую запись в историю сессии, бесконечное количество раз
addToHistoryButtonElement.addEventListener("click", () => {
    //по умолчанию не переходи автоматом на новую страницу
    window.history.pushState(
        //первый аргумент - state, может быть что угодно
        {
            console: "какой-то текст"
        },
        //пустой аргумент
        "", 
        //url, если оставить пустым, то будет взята актуальная url
        "./index.html"
    )
})

//модифицирует последнюю запись в историю сессии 
addToHistoryButtonElement.addEventListener("click", () => {
    //по умолчанию не переходи автоматом на новую страницу
    window.history.replaceState(
        //первый аргумент - state, может быть что угодно
        {
            console: "какой-то текст"
        },
        //пустой аргумент
        "", 
        //url, если оставить пустым, то будет взята актуальная url
        "./index.html"
    )
})

// //сохраняем введеные в фильтр данные пользователя и отображаем их в url  
// const filterFormElement = document.querySelector(".filter-form")

// filterFormElement.addEventListener("submit", () => {
//     const formData = new FormData(filterFormElement)
//     const formDataObj = Object.fromEntries(formData)
//     const paramsString = Object.entries(formDataObj)
//         .map(([key, value]) => `${key}=${value}`)
//         .join("&")

//     window.history.replaceState(
//         {},
//         "",
//         `${window.location.pathname}?${paramsString}`
//     )
// })

// //чтобы теперь при вставке url форма автоматически заполнялась
// window.location.search
//     .replace("?", "")
//     .split("&")
//     .forEach((queryParam) => {
//         const [name, value] = queryParam.split("=")

//         filterFormElement[name].value = value
//     })



//упрощенная версия
const filterFormElement = document.querySelector(".filter-form")

filterFormElement.addEventListener("submit", () => {
    const formData = new FormData(filterFormElement)
    const formDataObj = Object.fromEntries(formData)
    //сразу создаем специальный объект 
    const params = new URLSearchParams(formDataObj)
    const paramsString = params.toString()

    window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${paramsString}`
    )
})

//упрощенная версия
const paramsFromUrl = new URLSearchParams(window.location.search)

paramsFromUrl.forEach((value, name) => {
    filterFormElement[name].value = value
})