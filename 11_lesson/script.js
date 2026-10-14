/*
const obj1 = {
    name: "Alex",
    age: 28,
}
const obj2 = {
    name: "Alex",
    age: 28, 
}

const areObjectsEqual = (object1, object2) => {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    console.log("keys1:", keys1.length)
    console.log("keys2:", keys2.length)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key in keys1) {
        const value1 = object1[key]
        const value2 = object2[key]

        const areValuesObjects = typeof value1 === "object" && typeof value2 === "object"

        if (areValuesObjects) {
            return areObjectsEqual(value1, value2)
        }

        if (value1 !== value2) {
            return false
        }
    }

    return true
}

console.log("Are the objects equal? - ", areObjectsEqual(obj1, obj2)) 

const ob1 = {name: "Alex"}

//способ 1
const ob2 = Object.assign({}, ob1)

//способ 2
const ob3 = { ...ob1}

const s1 = {name: "alex"}
const s2 = {age: 28}

//способ 1
const user = Object.assign({}, s1, s2)

//способ 2 
const user2 = { ...s1, ...s2} 
*/

