// console.log(2>1) //true
// console.log(2>=1);//true
// console.log(2<1);//false
// console.log(2==1);//false
// console.log(2 !=1);//true

// console.log("2"<"1");
// console.log("02">1);// automatically converts string to number
// console.log(null >0); //0>0
// console.log(null == 0); //null !=0 eqaulity check
// console.log(null >= 0); //0=0
console.table([null>0 , null==0, null<=0])

//notes
//comparisons like >,<AbortController, <=, >= converts null into 0
//but eqaulity check == doesnt convert as null is not equal to 0

console.table([undefined ==0, undefined>0, undefined<0] ); // always false

console.log("2"==="2") // === is strict checking
console.log("2"===2);
console.log(true==1);



