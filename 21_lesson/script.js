console.log("Code beginning")

try {
    //выполнится, если ошибок не возникнет
    const names = ["Alex", "Bob", "Charlie"]
} catch (error) {
    //если в try возникнет ошибка, выполнится этот код
    console.log("Error: ", error)
}
//даже если будет ошибка, код все равно выполнится 
console.log("Code ending")

console.log("Code beginning")

try {
    //асинхронная функция
    //такая ошибка не будет обработана
    setTimeout(()=> {
        const names = undefined

        names.forEach((name) => {
            console.log("Name: ", name)
        })
    }, 3000)

} catch (error) {
    console.log("Error: ", error)
}


console.log("Code ending")

setTimeout(() => {
    try {
        const names = undefined

        names.forEach((name) => {
            console.log("Name: ", name)
        })
    } catch (error) {
        console.log("Error: ", error)
    }
}, 3000)


    try {
        const names = undefined

        names.forEach((name) => {
            console.log("Name: ", name)
        })
    } catch (error) {
        console.log("Error: ", error)
        console.log("name: ", error.name)
        console.log("message: ", error.message)
        console.log("stack: ", error.stack)
    }

try {
    const userJSON = `{
        "age": 28
    }`
    const user = JSON.parse(userJSON)
    const {name, age} = user

    if (!name) {
        const errorMessage = "Name isn't defined"
        throw new Error(errorMessage)
    }

    console.log(`
        Hello, ${name}!
        Your age - ${age}, right?`)
} catch(error) {
    console.log("Error: ", error)
}

try {
    //пытается выполнить код
} catch(error) {
    //обрабатывает возникшую проблему
} finally {
    //выполняется при любом раскладе 
}