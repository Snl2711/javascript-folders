//charAt

let fullName ="snehal"

 let abc = fullName.charAt(2)
 console.log(abc)

 //charCodeAt

 let ab=fullName.charCodeAt(2)
 console.log(ab)



 let name= "I Am New to Javascript"
 count=0
//PROGRAM 1
 for (let i=0; i<name.length;i++){

if(name.charCodeAt(i)>=65 && name.charCodeAt(i)<=90) {
    count=count+1

}

 }
//  console.log(count)

 //PROGRAM 2

 for(let i=0 ;i<name.length;i++){

    if(name[i] >="A" && name[i] <="Z" ){
   count = count +1
    }

 }

console.log(count)



// number+number ==>number
//number+ string ==> "string"
//string + number ==>"string"
// string + string ==> "string"

let f="hey"
    g = 10
    h =30

 console.log(f+g+h) //hey1030
 console.log(f+h+g) // hey3010
 console.log(g+h+f) //40hey


 // string concatination

 let firstName ="snehal"
    lastName ="bangar"

    console.log("my firstname is  "+firstName+" my lastName is "+lastName )
    console.log(`my firstName is ${firstName} and lastName is ${lastName}`)

    //(``)it gives string as a output for arithmetic eq, not a number
    console.log(`${20+30}`)


    //REPLACE *******(IMP METHOD)

    let person= "i am belongs to pune and lives in  pune"


 let qq = person.replace('pune',"sangamner")
 console.log(qq)

 function replaceAll(sen,word,repword){

let array= sen.split(' ')
console.log(array)

 let xyz =array.map(function(el){
if(el ==word){

    return el =repword

}
else{
    
    return el
}
     


})
console.log(xyz.join('  '))




 }

 replaceAll(person,"pune","sangamner")



 //SEARCH
  ccc=person.search( "pune")
  console.log(ccc)

 
//MATCH
ccc1=person.match( "pune")
console.log(ccc1)



//substring

ccc2 =person.substring(1,6)
console.log(ccc2)