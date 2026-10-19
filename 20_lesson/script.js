//передаем функцию(стрелочную или function, без ()) 
// и время, через которое функция будет выполнена 
setTimeout(() => {
    console.log("This will be shown 2 seconds after loading a page")
}, 2000)

const logMessage = (name, age) => {
    alert(`Hello, my name is ${name}, I am ${age} y.o` )
}

//после времени, следующими аргументами будут 
// аргументами для функции
const timer = setTimeout(logMessage, 2000, "Bob", 25)

clearTimeout(timer)

const intervalId = setInterval(() => {
    console.log("Hello")
}, 2000)

//выполняется 5 секунд, потом прекращается
setTimeout(() => {
    clearInterval(intervalId)
}, 5000)

setTimeout(function logMessage() {
    alert(`Message every 1 second`)
    //учитывает, что после закрытия тоже пройдет 1 секунда
    setTimeout(logMessage, 1000)
}, 1000)  

