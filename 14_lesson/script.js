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