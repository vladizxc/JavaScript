console.log("this global: ", this)

const user1 = {name: "max"}
const user2 = {name: "alex"}

function logInfo() {
    console.log("this ", this)
    console.log("this.name ", this.name)
}

logInfo()

user1.logInfo = logInfo
user2.logInfo = logInfo

user1.logInfo()
user2.logInfo()