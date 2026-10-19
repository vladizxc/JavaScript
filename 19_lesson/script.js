class Student {
    
    //Свойства
    planet = "Earth"
    country = "Russia"
    region

    //# обозначает, что свойство приватное 
    //извне не получиться обратиться к этому полю  
    #address = null
    
    //конструктор класса
    constructor(name, age) {
        this.name = name
        this.age = age 

        //здесь мы можем вызывать приватные методы
        this._someSecretAction()
        this.#secretAction()
    }

    //метод класса
    logAge() { 
        console.log(this.age)
    }

    //setter
    set city(value) {
        const firstLetter = value[0].toUpperCase()
        const fromSecondLetter = value.slice(1).toLowerCase()

        //_city предназначен для описания свойств класса
        //и должны использоваться только внутри класса  
        //тоесть приватные свойства
        this._city = `${firstLetter}${fromSecondLetter}`
    }

    //getter
    get city() {
        return `city ${this._city}` 
    }

    //приватные методы так же помечаются _
    //ничто не мешает их вызывать извне
    //но это плохая практика
    _someSecretAction(){
        //..
    }

    //если мы не хотим, чтобы можно было вызывать
    //методы извне, то тоже #
    #secretAction() {
        //..
    }
}

const firstStudent = new Student("Alex", 28)
firstStudent.logAge()

//извне мы обращаемся к свойствам через getter и setter  
firstStudent.city = "moscow"

console.log(firstStudent.city)

class Static_Student {
    static country = "Russia"

    constructor(name, age) {
        this.name = name
        this.age = age 
    }

    //в статическом методе нельзя использовать this
    static logAge(){
        console.log("Какой то возраст")
    }
}

//мы не можем создать сущность и вызывать у нее
//статические методы 
console.log("Country: ", Static_Student.country)
Static_Student.logAge()

class Person {
    constructor(name, age){
        this.name = name
        this. age = age
    }

    eat() {console.log("Eating...")}
    sleep() {console.log("Sleeping...")}
}

const examplePerson = new Person("Bob", 25)
//вызовет ошибку 
examplePerson.writeCode()


class Developer extends Person() {
    
    constructor(name, age, experience) {
        //вызывает конструктор родительского класса
        super(name, age)
        this.experience = experience
    }

    writeCode() {console.log("Writing code...")}

    eat() {
        //вызывает метода родительского класса
        super.eat()
        console.log("Watching youtube...")
    }
    //переопределение метода родительского класса
    sleep() {
        console.log("Don't want to sleep")
        this.writeCode()
    }
}

const exampleDeveloper = new Developer("Charlie", 23)
exampleDeveloper.writeCode()
//так же можно вызвать все теже методы, что и в Person
exampleDeveloper.eat()