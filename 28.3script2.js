//oops
 //types 
 // ENCAPSULATION == VIMP define class and make objects (maintain privacy)
 // POLYMORPHISM ==VIMP  one to many forms
 // INHERITANCE ==VIMP inherit properties and method from parents to child 
 // ABSTRACTION


 //object literal





let object ={

    fullName : "snehal bangar",
    College : "scop",
    language : "marathi",
    RollNo : 12,

display:function(){

console.log(this.language)

}

 }
 object.display()



 //by 

 class Person{
 constructor(fn,col,lan,rol){
 this.fullName = fn
 this.College = col
 this.language= lan
 this.RollNo = rol

 }
display(){

    console.log(this.College)
}

 }

let harsh = new Person("harsh bangar","amv","hindi",30)
harsh.display()

let komal = new Person("komal palke","mit")
komal.display()