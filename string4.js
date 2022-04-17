



let snehal = {

    fullName : "snehal bangar",
    Age : 22

}

let komal={
    fullName: "komal palke",
    age :21
}

//TYPE-PERSON
//s setting the properties outside the class
class Person{

    fullName= undefined
    age =undefined

}
// example 1(by dot notation)
let harshu =new  Person()

console.log(harshu)

harshu.fullName ="harshwardhan bangar"
harshu.age = 15
harshu.language ="marathi"
console.log(harshu)

//example 2(by bracket notation)

let ashu = new Person()

ashu['fullName'] ="ashu mahajan"
ashu['age']= 24
ashu['language'] ="english"
console.log(ashu)


// setting the value by constructor

class person2 {

    constructor(fn,ag,skl){
    
        this.fullName =fn
        this.age =ag
        this.skills =skl
    }


}
 let pooja = new person2("pooja chaudhari",22,["dancing","crafting"])
 console.log(pooja)


 let rushi = new person2("rushi kawade",22,["java","react","node js"])
 console.log(rushi)



// constructor method 2

class person4 {

    constructor(fn,rn,ag){

 this.fullName =fn
 this.rollNo =rn
 this.age =ag


    }
}
sayali= new person4 ("sayali bangar",22,19)
console.log(sayali)

let students = 

[new person4("sneha",23,["js","cypress"]),
new person4("kajal",31,["js","c"]),
new person4("payal",30,["css","python"])

]

console.log(students[0])

students.forEach(function(el){
for(let key in el){
    console.log(key,el[key])
}
})

let lang =["english","marathi","hindi"]
students.forEach (function(el,index){

el.lang= lang[index]


})
console.log(students)


//using set function

class Person5 {

setAge(ag){
    this.age =ag
}


setFullName(fn){
    this.fullName =fn
}

setRollNo(rn){

    this.rollNo =rn
}


}


let sanika = new Person5()
sanika.setAge = 23
sanika.setFullName ="sanika M"
sanika.setRollNo = 55
console.log(sanika)