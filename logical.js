// find the  longest word in the given array

let names = ["snehal","ashwini","pooja"]

 let long =names.reduce(function(acc,el){

    if(el.length >acc.length){

        return el
    }

else{

    return acc
}

 },"  ")
 console.log(long)

 //find the maximum no and min no in the given array


// 1st- for Max no
 let num = [10,50,20,40,80]

 let  aaa= num.reduce(function(acc,el){

if(el> acc){

    return el
}


else{

    return acc
}
 },0)

console.log(aaa)


// 2nd for min no

let  bbb= num.reduce(function(acc,el){

if (el < acc){
    return el
}

else{
    return acc
}

})

console.log(bbb)

//passing the no to the function
// with aarguments
function add(a,b){

    console.log(a+b)
}
add(10,20)

// without arguments, with default value(when we dont pass arguments we can set the default value for the particular problem statement )

function add2(x= 100,y =20){

    console.log(x/y)
}
add2()

// by passing string to the function


function greetings(word){

    console.log('welcome' + word)

}
greetings("snehal")


// by passing the array to the function

let nb= [10,20,30,40,50]

function addArray(arr){

let sum =arr.reduce(function(acc,el){

return acc +el

})
console.log(sum)


}
addArray(nb)