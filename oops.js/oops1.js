// //oops
//  //types 
//  // ENCAPSULATION == VIMP define class and make objects (maintain privacy)
//  // POLYMORPHISM ==VIMP  one to many forms
//  // INHERITANCE ==VIMP inherit properties and method from parents to child 
//  // ABSTRACTION


//  //object literal





//  let object ={

//     fullName : "snehal bangar",
//     College : "scop",
//     language : "marathi",
//     RollNo : 12,

// display:function(){

// console.log(object)

// }

//  }
//  object.display()



//  //by 

//  class Person{
//  constructor(fn,col,lan,rol){
//  this.fullName = fn
//  this.College = col
//  this.language= lan
//  this.RollNo = rol

//  }
// display(){

//     console.log(this.collage)
// }

//  }

// let harsh = new Person("harsh bangar","amv","hindi",30)
// harsh.display()

// let komal = new Person("komal palke","mit","marathi",40)
// komal.display()

//console.log(harsh)

//console.log(komal)



/****************************************************************/
// TYPES OF "OBJECT" WRITTEN IN JAVASCRIPT( 4 TYPES)


// 1- FUNCTION CONSTRUCTOR

let Person2 = function(fn,lag, fd){

    this.fullName = fn
    this.language = lag
    this.favDish = fd

    this.display = function(){

        console.log(this.favDish)
    }
}


let snehal = new Person2 ("snehal bangar","marathi","pasta")

console.log(snehal)

//PROTOTYPE

// every object in javascript has  __ptoto__ property

console.log(snehal.__proto__ === Person2.prototype)