/*
const logHello = function () {
    console.log("hello")
}

logHello()
*/
/*
const logHello = () => {
    console.log("hello")
}

const logSum = (a, b) => {
    console.log(a + b)
}

logSum(2,4)
*/

const doSomething = (num) => {
    const isEven = num % 2 === 0

    return isEven ? num / 2 : (num + 1) / 2
}

console.log(doSomething(2))

const fn1 = () => {
    return "function 1"
}

const fn2 = fn1

const logMessage = (actionBefore, actionAfter) => {
    actionBefore()
    console.log("hello")
    actionAfter()
}

const fn3 = () => console.log("before")
const fn4 = () => console.log("after")

logMessage(fn3, fn4)

const validate = (hasAccess) => {
    if(hasAccess) {
        return () => console.log("Access")
    }else {
        return () => console.log("no Access")
    }
}

const message = validate(true)
message()