//map

let marks= [10,20,30,40]

  let aa =  marks.map(function(el,index,arr){

     return el+25   

    })

console.log(aa)

//filter
 let bb = marks.filter(function(el,index,arr){

    return el>20

 })
 console.log(bb)

 //reduce
 let cc = marks.reduce(function( acc, el,index,arr){

    return acc+ el
 })
 console.log(cc)

 // every

 let numbers = [30,40,50,60]

       dd = numbers.every(function(el,index,arr){

     return el>100

      })
      console.log(dd)

      //some

      let  ee = numbers.some(function(el,index,arr){

        //return el>30

        return el > 30
    
    })
    console.log(ee)



    //find
   let qq =  numbers.find(function(el,inderx,arr){


        return el <40
    })
    console.log(qq)

    //findindex
       rr = numbers.findIndex(function(el,index,arr){


        return el > 50
       })

       console.log(rr)


       //join

       let data = ["snehal","madhukar","bangar"]

          let z =   data.join("-")

        console.log(z)

        // concat

  let dx = ['parcetamol','citrizine','azithromycin']
      use =['fever','cold','cough']

         let abcd =dx.concat(use)

         console.log(abcd)

         //splice
              //        0       1        2        3        4
          let names = ["snehal","komal","pooja","avanti","shamli"]

           names.splice(2,3)

           
           console.log(names)
    
//fill 
let nu = [11,22,33,44]

  nu.fill('b',1,2)


  console.log(nu)



 al =nu.find(function(el,index,arr){
     return el =  

     
  })
   console.log(al)


   et cc = marks.reduce(function( acc, el,index,arr){

      return acc+ el
   })
   console.log(cc)