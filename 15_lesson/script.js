const arr = []

const arr2 = new Array()

const arr3 = ["Hello", 100, true, () => console.log("hello")]

arr3[0]

arr3[100]

arr3[0] = "Bye"

const letters = ["a", "b", "c"]

letters.push("d", "e")

letters.unshift("0")

const letter = letters.pop()

const letter2 = letters.shift()

arr3.toString()
arr3.join(", ")

const arr4 = [...arr3]
const arr5 = arr4.slice()

const arr6 = [...arr4, ...arr5]

const arr7 = arr4.concat(arr5)

const areArraysEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false
    }

    for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]) {
            return false 
        }
    }

    return true
}

const areArraysEqual1 = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false
    }

    for(let i = 0; i < array1.length; i++){
		const val1 = array1[i]
        const val2 = array2[i]
        
        const areValuesArrays =
            Array.isArray(val1) && Array.isArray(val2)
        
        if (areValuesArrays) {
            if(!areArraysEqual(val1, val2)){
                return false
            } else {
                continue
            }
        }
        
        if(val1 !== val2) {
            return false 
        }
    }

    return true
}