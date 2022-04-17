let lperson1 = ["snehal bangar","23","02"]


let person1 = {
 fullname :"snehal bangar",
 Rollno : 02,
 Age:"23"



}

//obj does not store the value by index
//2 meth= .notation and bracket notation

//retrive

console.log(person1.fullname)
console.log(person1["fullname"])

console.log('---------------------------------------')

// add
person1.language = "marathi"
person1["city"]="pune"
console.log(person1)


console.log('---------------------------------------')
//update
person1.Rollno = 5
person1["Age"]= 25

console.log(person1)

console.log('---------------------------------------')

//delete

delete person1.Age

console.log(person1)




console.log(person1.fullname)
console.log(person1["fullname"])