//FOR loop , While loop , Break , continue


//FOR 
//increment
for (let i = 0 ; i<= 6; i++ ){

console.log(i)

}

console.log('-------------------------------')
//decrement
for (let i = 6 ; i>0; i-- ){

    console.log(i)
    
    }
    
// even and odd no
console.log('--------------------------')
for (let i=0 ; i<=40; i++){

    console.log(i)

    if (i % 2 ==0){

        console.log('even',i)
    }

else{console.log('odd',i)
}

}

console.log('------------------------------')

//WHILE loop
 
let numb = 1

while(numb<=5){
    console.log(numb)

    numb++
}

console.log('--------------------------')
let numb2 = 5
while(numb2  >=1){
    console.log(numb2)

    numb2--
}


// even odd bye while loop
console.log('------------------------------')
let nob = 1

while(nob <= 50){

   if(nob %2 == 0) {
       console.log('even no',nob)
   }
    

   else{
       console.log('odd no',nob)
   }

  nob ++

}
console.log('-------------------------')

























//wlile

let wv = 1
while(wv<=7){

    console.log(wv)
    wv++
}
console.log('------------------')
let wa = 7
while(wa>=1){

    console.log(wa)
    wa--
}

console.log('--------------------')

let you = 1

while(you <= 50){

 if (you %2 ==0){
     console.log('even2',you)
 } 

 else {
     console.log('odd2',you)
     
 }

 you++
}









console.log('--------------------------')

let aa =[0,2,8,6,7,5,1,9]

for (let aa=0;aa<=9;aa++){

if(aa %2 ==0){
    console.log('even',aa)
}


else{
    console.log('odd',aa)
}
}


console.log('----------------------------------')
//While

//let aaa =[0,1,8,10,11,55,1,90]
//let aaa1=0
//while(aaa1<=0,1,8,10,11,55,1,90){

   // if (aaa1 %2 ==0){

      //  console.log('even',aaa1)
   // }

//else {
   // console.log('odd',aaa1)

//}
//aaa1++

//}

for (i=0 ; i<6 ;i++){

    if (i==3){
        break ;
    }
    console.log(i)
    }
    
    console.log('-----------------------------')
    for (i=0 ; i<6 ;i++){

        if (i==3){
            continue ;
        }
        console.log(i)
        }