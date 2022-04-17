

// REGULAR EXPRESSION 


let sent =" I am snehal and I an new to javascript, my fullname is snehal bangar"
let reg =/snehal/g//====>literal

  abc =reg.exec(sent )
  console.log(abc)
 // bcd =reg.exec(sent )
  //console.log(bcd)reg.exec(sent )
  
  cd =reg.exec(sent) 
  console.log(cd)
  ss =reg.exec(sent) 
  console.log(ss)

  vv =reg.exec(sent)
  console.log(vv)


  let ans =reg.exec(sent )
  while(ans){

    ans =  reg.exec(sent )

    console.log(ans)



  }let ans1=reg.exec(sent )

  while(ans1){
    console.log(ans1)
    ans1 =  reg.exec(sent )

    
  }



  // methods of regular expression
   //3= test
  // 1=match 
  //2 =search
 
 //TEST
 if(reg.test(sent)){

console.log("pass")

}
else{

  console.log("fail")
}

// SEARCH
let aa =" I am new to javascript Am good with javascript"

let reg1=/am/gi


let v =aa.search(reg1)
console.log(v)


//MATCH

vb =aa.match(reg1)
console.log(vb.length)



// REPLACE
let vbb =aa.replace(reg1,"sneha")
console.log(vbb)


//METACHARACHTERS

let er ="out of the Mountain oF despire a stone of hope"

let reg2 =/^out/gi
let reg3 =/ope$/gi

if(reg2.test(er)){

  console.log("pass")
}
else{"fail"}

if(reg3.test(er)){

  console.log("pass")
}
else{"fail"}




let veggie ="potato"
let reg4 =/.to/

if(reg4.test("veggi")){

  console.log("pass")
}
else{"fail"}


let toy =" bat"

let reg5 =/ba*/
if(reg5.test("toy")){

  console.log("pass")
}
else{"fail"}
 

k ="mango"

reg5 =/m?ango/

if(reg5.test("k")){

  console.log("pass")
}
else{"fail"}




//GROUPS 
let s ="vdvd"
let reg6 =/v[dv][dv]d/

console.log(reg6.test(s))



let ab =" baba"
let reg7 =/b[a-z][0-9]/

console.log(reg7.test(ab))

let bb= "mat"

let reg8 =/m[a-z][0-9t]/
console.log(reg8.test(bb))