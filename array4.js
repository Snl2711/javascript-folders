
//program 1(prob by includes)


let array =[10,40,50,20,10,60,40,20,90]
let arr =[]

for(let i= 0; i< array.length ;i ++){

if (!arr.includes(array[i])){


arr.push(array[i])
}

}
console.log(arr)


//program 2(prob by indexOf)

for(let i =0 ; i<array.lengh ; i++){

    if (arr.indexOf(array[i]) < 0){

        arr.push(array[i])
    }
}
console.log(arr)

//program  2 (filter)

 let abc =array.filter(function(el,index){

return array.indexOf(el)==index

})
console.log(abc)













console.log('------------------------------------')


// includes
let grp = [20,30,40,20,10,40,50,30]
let grp2 = []

for(let i= 0; i<grp.length;i++){

    if(!grp2.includes(grp[i])){


        grp2.push(grp[i])
    }
}
console.log(grp2)

//indexOf

for(let i= 0; i<grp.length;i++){

if (grp2.indexOf(grp[i])< 0 ){

    grp2.push(grp[i])
}

}

console.log(grp2)

//filter

let vb =grp.filter(function(el,index){
return grp.indexOf(el) ==index



})

console.log(vb)