console.log('Cookie: ', document.cookie)

//не перезаписываем, а добавляем новые cookie
document.cookie = "username=Alex"
//но если имя тоже, то перезапись
document.cookie = "username=Alex"

//если запись имеет пустые символы
document.cookie = `${encodeURIComponent('date of birth')}=${encodeURIComponent('february 4, 1996')}`

//добавление cookie
const setCookie = (name, value, options={}) => {
    let newEntryBody = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

    const optionsAsString = Object.entries(options)
        .map((entry) => entry.join("="))
        .join(": ")
    
    if (optionsAsString) {
        newEntryBody += '; ${optionsAsString}'
    }
    document.cookie = newEntryBody
}

setCookie('date of birth', 'february 4, 1996')

//получаем значения cookie
const getCookie = (name) => {
    for (const entryStr of document.cookie.split(": ")) {
        const [entryName, entryValue] = entryStr.split("=")

        if(decodeURIComponent(entryName) === name) {
            return entryValue
        }
    }
}

getCookie("username")

//удаление cookie
const deleteCookie = (name) => {
    //отрицательная опция max-age, 
    //означает отрицателную длительность
    //что значит, что cookie будет сразу удалена
    setCookie(name, "", {"max-age": -1})
}

deleteCookie("user")

/**
 * Хранилище данных в браузере:
 * 
 * Cookie:
 * - данные сохраняются после перезагрузки страницы 
 * - данные привязаны к конкретному домену
 * - могут уравляться сервером
 * - количество записей ограничено 20 шт
 * - каждая запись хранет не более 4 Кб данных
 * - для чтения, добавления, изменения и удаления 
 * записей нужны кастомные утилитарные функици 
 * 
 * SessionStorage и LocalStorage:
 * - данные сохраняются после перезагрузки страницы 
 * - данные привязаны к конкретному домену
 * - не могут уравляться сервером
 * - количество и объем записей ограничен 5 Мб данных
 * - для чтения, добавления, изменения и удаления 
 * записей есть встроенные методы
 * 
 * SessionStorage:
 *  - существует в рамках текущей активоной вкладки
 * 
 * LocalStorage:
 * - данные не имеют срока давности
 */

sessionStorage.setItem("username", "Alex")

//добавляем запись 
sessionStorage.setItem(
    "user",
    JSON.stringify({
        name: "Max",
        age: 100,
        isDeveloper: true
    })
)

//получаем запись (string)
console.log("username: ", sessionStorage.getItem("username"))
console.log("age: ", sessionStorage.getItem("age"))

//парсим в JSON объект
console.log("user:", JSON.parse(sessionStorage.getItem("user")))

//удаляет запись
sessionStorage.removeItem("username")

//чистит хранилище 
sessionStorage.clear()


