// function constructor


let Person = function (fn, lang, rollNo) {
    this.fullName = fn
    this.language = lang
    this.RollNo = rollNo

    //  this.display = function(){

    // console.log(this.language)

}


Person.prototype.display = function () {

    console.log(this.RollNo)
}
Person.prototype.college = "SCOP"


let snehal = new Person("snehal bangar", "hindi", 30)
let harsh = new Person("harsh bangar", "marathi", 16)
snehal.display()
harsh.display()
console.log(snehal)
console.log(harsh)

console.log(snehal.__proto__ === Person.prototype)

console.log(snehal instanceof Person)

console.log(snehal)

console.log(snehal.hasOwnProperty("college"))
console.log(snehal.hasOwnProperty("fullName"))

/********PROGRAM 2*************/

class Person2 {

    constructor(fn, age) {
        this.fullName = fn
        this.age = age
    }
    display() {

        console.log(this.fullName)
    }

}
let rushi = new Person2("rushi kawade", 23)
rushi.display()
console.log(rushi)
console.log(rushi instanceof Person2)
console.log(rushi)

/************PROGRAM 3******************/
// 3RD WAY TO CREATE OBJECT = create()

// if we want to print values in __protot__ the we have to pass the value in Object.create({values})

let protoobj = {

    display: function () {

        console.log("admin")
    }
}

let ashu = Object.create(protoobj)
console.log(ashu)

ashu.FullName = "ashwini M"
ashu.RollNo = 10
ashu.language = "english"
console.log(ashu)
ashu.display()



/*********************PROGRAM 4*************************************/
// INHERITANCE


class Snehal {
    fullName = "snehal bangar"
    age = 23
    Language = "marathi"

}

class Rushik extends Snehal {

    salary = 2000000

}


class Professor extends Rushik {

    specialization = "chemistry"
}


class Pooja extends Professor {


    designation = "executive"
}

//let srk = new Rushik()
//console.log(srk.salary)
// class  Rushik extends snehal{
//     salary = 2000000
//let srk = new Professor()


let srk = new Pooja()
console.log(srk.salary)
console.log(srk.fullName)
console.log(srk.age)
console.log(srk.Language)

console.log(srk)


//  with using CONSTRUCTOR

class grandfather {
    constructor(fn, age, adharNo) {
        this.fullName = fn
        this.Age = age
        this.AdharNo = adharNo

    }

}
class Father extends grandfather {
    constructor(fn, age, adharNo, salary) {
        super(fn, age, adharNo)
        this.salary = salary
    }

}
class son extends Father {
    constructor(fn, age, adharNo, salary, RollNo) {
        super(fn, age, adharNo, salary)
        this.RollNo = RollNo
    }

}

let sayali = new son("sayali bangar", 20, 1235, 1000, 23)
console.log(sayali)


/************************************************************/

//rutu // display()
//aishu // display()
//ruhi  // display()


class Rutu {

    constructor(fn, ln) {
        this.Firstname = fn
        this.lastName = ln

    }
    display() {
        console.log(this.Firstname, this.lastName)
    }

}
class Aishu extends Rutu {

    constructor(Rfn, ln, Afn) {
        super(Rfn, ln)
        this.AfirstName = Afn

    }

    display() {

        console.log(this.AfirstName, this.lastName)
    }
}

class Ruhi extends Aishu {

    constructor(Rfn, ln, Afn, Rufn) {
        super(Rfn, ln, Afn)
        this.RufirstName = Rufn
    }

    display() {

        console.log(this.RufirstName, this.lastName)
    }
}
let Person4 = new Ruhi("rutuja", "kale", "aishwary", "Ruhisha")
Person4.display()

/****************OVERRIDE*******************************/