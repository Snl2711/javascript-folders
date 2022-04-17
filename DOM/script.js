//<h1 class="one" id="two" name ="nam" >snehal</h1>

//find the element by tagname---------------------->

let  a =document.querySelector("h1")
console.log(a)

// ID
let b = document.querySelector('#two')
console.log(b)

//class
let c = document.querySelector('.one')
console.log(c)
 

//common formula

//('tagname[attribute="value "]' )

let htmlElementOne =document.querySelector('h1[name="nm"]')




//text - cypress
htmlElementOne.addEventListner('click',function(){

    htmlElementOne.style.color = "black"
    htmlElementOne.style.backgroundColor = "red"
})


