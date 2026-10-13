const user = {
    //Значение может быть любым типом данных, функцией
    //или другим объектом
    login: "iamsuperhero",
    password: "querty",

    //Если ключ содержит пробел или дефис, то нужно 
    //оборачивать в ковычки
    "registration date": "01.01.2026",
    "last-auth": "05.05.2026",

    sayHi: () => console.log("Hi"),
}

console.log(user.login)
console.log(user["registration date"])
user.sayHi()

const post = {}

post.date = "10.10.2026"

//обновление свойства
post.date = "11.10.2026"

delete post.date

const firstName = "max"
const age = 28

const person = {
    firstName, 
    age
}

const promptName = prompt("Свойство с каким именем добавить в объект?")
const promptValue = prompt(`Какое значение записать в свойство ${promptName}`)

const obj = {
    [promptName]: promptValue
}