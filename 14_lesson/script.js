const length = "123".length

const name = "alex"

console.log(name[0])
console.log(name[name.length-1])


console.log(name.at(0))
console.log(name.at(-1))

const text = "AbAcD"

text.toLocaleLowerCase()
text.toUpperCase()

const message = " hello! "

message.trim()
message.trimStart()
message.trimEnd()

message.indexOf("ello")

message.includes("ello")

message.startsWith("he")
message.endsWith("lo", 2)

message.substring(0, 2)

message.repeat(3)

message.replace("he", "He")
message.replaceAll("he", "He")

message.split("")

let mes = "Hello!"

mes = mes
    .trim()
    .toUpperCase()
    .slice(0, 4)

const value = prompt("Enter your name: ")

const clearValue = value.trim().toLowerCase()

if(clearValue.length === 0) {
    alert("Error! Name cannot be empty")
}

if(clearValue.includes("admin")) {
    alert("Error! Name cannot be admin")
}