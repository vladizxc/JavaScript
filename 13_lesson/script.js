const user = {
    name: "alex",
    age: 28,
    logInfo() {
        console.log(`
            name: ${this.name},
            age: ${this.age}
        `)
    },
    getIsAdult() {
        return this.age >= 18
    }, 
}

user.logInfo()
console.log("Adult? ", user.getIsAdult())

const price = 99.99
const roundedPrice = price.toFixed(0)

console.log(5..toFixed(2))
console.log((190.99).toFixed(1))

const num = 10
//100.1 начинает с начала числа
console.log(num.toPrecision(4))
//100.0550 начинает после запятой
console.log(num.toFixed(4))

console.log(num.toString(2))

//Округление до ближайшего целого
Math.round(3.49) // 3
//Округление вверх до ближайшего целого
Math.ceil(3.49) // 4
//Округление вниз до ближайшего целого
Math.floor(3.49) // 3
//Отбрасывает числа после запятой
Math.trunc(3.49)

const numberAsString = "100px"

parseInt(numberAsString)
