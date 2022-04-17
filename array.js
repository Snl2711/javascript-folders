let product = ["cream","lotion","lipstick","eyeshadow"]
   console.log(product[0])
   console.log(product[1])
   console.log(product[2])
   console.log(product[3])

//loop
for(let i=0 ; i< 4; i++){

    console.log(i)

    console.log(product[i])
}

//product.length

a = product.push("nailpaint")
console.log(a)
console.log(product)

b=product.unshift("blush")
console.log(b)
console.log(product)


c= product.pop()
console.log(product)
console.log(c)

d= product.shift()
console.log(product)
console.log(d)
a = product.push("nailpaint")
console.log(a)
console.log(product)


//push- add the element at the last 
//unshift- add the elelment at the start
//pop- remove the elelent from the last and retun
//shift- remove the element from the first and return,
//indexOf

city= ["pune","nashik","mumbai","banglore"]

let zzz = city.indexOf("mumbai")
console.log(zzz)


//includes

let yyy =city.includes("nashik")
console.log(yyy)
console.log('---------------------------------')
//reverse

let lll= city.reverse()
console.log(lll)



