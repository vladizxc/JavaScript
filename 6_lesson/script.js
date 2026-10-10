/*
alert("Hello!")

const age = prompt("Enter your age: ", 10)

if (age >= 18) {
    console.log("You can enter")
}else {
    console.log("You cannot enter")
}
*/

/*
const isUserReady = confirm("Are u ready?")

if (isUserReady) {
    alert("Nice")
}else {
    alert("sag:/")
}
*/

const age = +prompt("Enter your age: ")

switch(age) {
    case 0: {
        console.log("No such age exists")
        break
    }
    case 18: {
        console.log("Show your passport")
        break
    }
    case 1000: {
        console.log("are you vampire")
        break
    }
    default: {
        console.log('Your age is: ${age}')
    }
}
