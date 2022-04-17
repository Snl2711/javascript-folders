// DESTRUCTURE

//prob 1
let array = [1, 5, 6, 7]

let w = array[0]
console.log(w)

// destructure

let [e, r, t, u] = array

console.log(e)
console.log(r)
console.log(t)
console.log(u)

//prob 2
let city = ["nashik","pune","delhi","surat"]

let [b,n,m,l]=  city

console.log(l)


//logical problems
// prob-3
let array2 = [[1,2,3],[4,5,6],[7,8,9]]

//flat
let q= array2.flat()
console.log(q)

//without using flat
//map= concat

let ww=array2.reduce(function(acc,el){

    return acc.concat(el)


},[])
console.log(ww)

// destructure

let [rr,tt,yy]= array2
console.log(rr)
console.log(tt)
console.log(yy)

// destructure for every element in givent array
console.log("----------------------------------------------------")
let [[xx,zz,ss],[vv,bb,nn],[hh,jj,kk]] = array2

console.log(xx)
console.log(zz)
console.log(ss)
console.log(vv)
console.log(bb)
console.log(nn)
console.log(hh)
console.log(jj)
console.log(kk)



console.log('-----------------------------------------------------------')
// prob -4
let student = {

name :"snehal",
rollNo : 22,
education:"pharmacy"

}

let {name,rollNo,education} = student

console.log(education)

// we can alliage to prevent same names of variables
console.log('------------------------------------')
let {name:O,rollNo:o2,education:o3} = student

console.log(O)
console.log(o2)
console.log(o3)

//prob 5

let person=[

{
name :"snehal",
surname :"bangar"


}
,
{
    name :"komal",
    surname :"palke"

}
,
{

    name :"saee",
    surname :"shete"

}

]

let [{name:pp,surname:pp1},{name:pp2,surname:pp3},{name:pp4,surname:pp5}]= person

console.log(pp)
console.log(pp1)
console.log(pp2)
console.log(pp3)
