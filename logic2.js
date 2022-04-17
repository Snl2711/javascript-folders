let marks = [50,40,60,70,55,90]

 function snehal(marks,fn){
    let newmarks = []
 for (let i =0; i< marks.length ;i ++){

        let aaa = fn(marks[i])

     newmarks.push(aaa)
 }
  return newmarks
 }

let newarray = function(el){
    return el*2
}
 abc = snehal(marks,newarray)

console.log(abc)



console.log('--------------------------------------------')


let marks1 = [50,40,60,70,55,90]

function snehal(marks1,fn){

    let newmarks= []

    for(let i=0;i<marks1.length ; i++){

       bb =fn(marks1[i])
       newmarks.push(bb)
    }

return newmarks

}
let abcc = function(el){
    return el + 5 
}
let qq =snehal(marks1,abcc)
console.log(qq)



console.log('----------------------------------------------------------')


array =[30,40,70,90,60]

function newaar(array,fn){
new1 =[]
for(let i =0; i<array.length; i++){

    let q1= fn(array[i])

new1.push(q1)

}

return new1

}
  

let bnb =function(el){

return el / 2
}

let q2 =newaar(array,bnb)

console.log(q2)

let aa2 = function(el){

    return el +"counts"
}
let bbb =newaar(array,aa2)

console.log(bbb)





console.log('----------------------------------------------------')


let points = [70,80,90,60,40,30,10,20,]
  
function pt1(points, fn){

let pt2 =[]
 
for(let i =0; i<points.length;i ++ ){

let points = [70,80,90,60,40,30,10,20,]
   pt3 =fn(points[i])


pt2.push(pt3)


}
return pt2
}

let pt4= function(el){

    return el * 5
}

abcd = pt1(points,pt4)

console.log(abcd)



let pt5 = function(el){

    return el / 2

}

abcd2 = pt1(points,pt5)

console.log(abcd2)