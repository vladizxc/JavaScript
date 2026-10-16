const data = ["ales", 28]

const [name, age] = data

const letters = ["a", "b", "c", "d"]

letters.forEach((element, index, array) => {

})

letters.indexOf("a", 2)

letters.lastIndexOf("b")

const users = [
    {
        name: "alex",
        age: 28,
        city: "Moscow"
    },
    {
        name: "bob",
        age: 28,
        city: "Saint-P"
    },
    {
        name: "charlie",
        age: 28,
        city: "Saint-P"
    }
]

users.findIndex((element, index, array) => {
    if (element.name === "bob") {
        return true 
    }
})

users.findIndex((user) => user.name === "bob")

users.findIndex(({name}) => name === "bob" )

users.findLastIndex(({name}) => name === "bob" )

letters.includes("a", 1)

users.some((user) => user.name === "bob")

users.every((user) => user.age >= 18 )

users.find((user) => user.name === "bob")

users.filter((user) => user.name === "bob")

let filteredUsers = users.filter((user) => user.age >= 18 || user.city === "Saint-P")
console.log(filteredUsers)

filteredUsers = users.map((user) => {
    return `${user.name}, ${user.age} lives in ${user.city}`
})

console.log(filteredUsers)

debugger
const ageSum = users.reduce((sum, user) => {
    return sum + user.age
}, 0)

const reversedUsers = users.reverse()

let sortedUsers = users.sort()
sortedUsers = users.sort((a, b) => a-b)