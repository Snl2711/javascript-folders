// comparison operator = output is boolean(true or false)
// < ,>, <=, >= ,!= , == , === , !==

console.log(10> 7)//true
console.log(2>5)//false
console.log(5 >=6)//false
console.log(6<=7)//true
console.log(5 == '5')//true
console.log(7 ==='7')//false
console.log(5!=='5')//true
console.log(9 == '9')//true


//LOGICAL OPERATOR = AND, OR, NOT

//AND 
//TRUE-TRUE =TRUE
//TRUE-FALSE=FALSE
//FALSE-TRUE=FALSE
//FALSE-FALSE=FALSE
console.log(5==5 && 5 !=='5')
console.log(5 < 7 && 5==='5')
console.log(2 != 2 && 6 <9)
console.log(4 ==='4'&& 9< 4)

//OR
//TRUE-TRUE =TRUE
//TRUE-FALSE=TRUE
//FALSE-TRUE=TRUE
//FALSE-FALSE=FALSE
console.log(9==9 || 9 !=='9')
console.log(5 < 7 || 5==='5')
console.log(3 != 3 || 6 <7)
console.log(4 ==='4'|| 9< 4)



//NOT
//TRUE=FALSE
//FALSE=TRUE
console.log(!false)
console.log(!true)

//CONDITIONAL STATEMENT= SAME INPUT AND MULTIPLE OUTPUTS

//numberOfbooks=10
//10 = 5 % dis
//10 =10% dis


//if(condition){

//}


//else{

//}

let numberOfbooks=10

if (numberOfbooks < 6){

    console.log('10 % discount')

}

if (numberOfbooks > 6){

    console.log('10 % discount')

}
//------------------------------------------------------>

else if (numberOfbooks < 6){

    console.log('10 % discount')
}

else if (numberOfbooks = 10){

    console.log('10 % discount')
}