//string
//string stores the value by index


let food = "dhosa"
// 0 1 2  3 4  
// d h o s a 

console.log(food[0])
console.log(food[1])
console.log(food[2])
console.log(food[3])
console.log(food[4])

//loops
 for (let i=0;i<4 ; i++){
   console.log(i)
   console.log(food[i])
 }


  let q = food.length
  console.log(q)

  //types of string

  let bike = "KawAsAki"
   let   s=  bike.toUpperCase()
   console.log(s)


    let t =  bike.toLowerCase()
    console.log(t)


    let n= bike.toLocaleUpperCase().toLowerCase().toLocaleUpperCase()
    console.log(n)


    let v= bike.toLocaleUpperCase().toLowerCase().toLocaleUpperCase().length
     console.log(v)


    //let p = bike.toLocaleUpperCase().toLowerCase().toLocaleUpperCase().length.toLowerCase()


//console.log(p)


  m = bike.startsWith("k")
  console.log(m)


 //g= bike.e("K") //boolean

 //console.log(g)


let  j =bike.endsWith("i")
 console.log(j)

//INCLUDES  
 let names = "snehal pooja komal ashu aesha"

 let  qq =names.includes("ashu")

 console.log(qq)

 let qq1 =names.includes("Snehal")
 console.log(qq1)

 // INDEXOF

 let qq2= names.indexOf("komal")
 console.log(qq2)


 let qq3 =names.indexOf("Komal") // output = (-1)
 console.log(qq3)

  //

let userName = "priya"

let names1 ="kajal nidhi rutuja axita"

if(names1.indexOf(userName) < 0){

  console.log('your name is not available')

  }

else {
  console.log('your name is available')

}


//TRIMSTART
 let fruits = "  mango"
console.log(fruits.length)
 let abc =fruits.trimStart()

 console.log(abc.length)

 //TRIMEND

 let fruit = "orange  "
 console.log(fruit.length)
let abcd = fruit.trimEnd()
console.log(abcd.length)

//TRIM

let fruit3 = "   kiwi   "
console.log(fruit3.length)
let xy =fruit3.trim()
console.log(xy.length)
