const user = {
    name: "alex",
    age: 26,
    city: "Moscow",
}

const userKeys = Object.keys(user)

const UserValues = Object.values(user)

const userEntries = Object.entries(user)

const userEntriesFormatted = userEntries.map(([key, value]) => {
    return [key.toUpperCase(), `--${value}--`]
})

console.log(userEntriesFormatted)

const data = new Map([
    [1, "1 as number"],
    ["1", "1 as string"]
])

data.set(2, "2 as number")
data.set("2", "2 as string")

data.get(1)
data.get("1")

data.delete("1")

data.has("name")

data.size

data.keys()
data.values()
data.entries()

for (const key of data.keys()){
    console.log(key)
}

for (const value of data.values()){
    console.log(value)
}

for (const entry of entry.keys()){
    console.log(entry)
}

data.forEach((value, key, map) => {
    console.log(value)
    console.log(key)
    console.log(map)    
})

const obj = {
    name: "alex",
    age: 28,
}

const map = new Map(Object.entries(obj))

const obj1 = Object.fromEntries(map)

const set = new Set([1,2,3,3,4,5])

set.add(2)