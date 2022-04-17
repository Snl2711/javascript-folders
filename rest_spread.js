 // rest operator, and spread operator

 //rest- comma separated values into array
 //spread -vice versa

 //REST

 function add(...arr){
   let add1 =arr.reduce(function(acc,el){

    return acc + el
 })


console.log(add1)


 }
 add(10,20,30)
 add(80,40,70,10,50,60,30)
 add(30,80,90,70,4,10,50,60,90,100)

console.log('-------------------------------------------')

 //SPREAD

 let array= [10,50,80,70,60,40]

 function printThree(x,y,z){

console.log(x)
console.log(y)
console.log(z)

 }

 printThree(...array)