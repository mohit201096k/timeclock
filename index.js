console.log("hello world");
//variable in java script
var number1=34;
var number2=56;
console.log(number1+number2);
//object
var marks={
    mohit: 83,
    krishna: 85,
    subham:54
}
console.log(marks)
/* two types of data type primitive and refernce data type
 1 primative: string,number, Boolean,undefined,null, Symbol
 2 refernce: aaray and object */
// operators in java script is arthematic operators
// var a= 100;
// var b= 10;
// console.log('this the value of a and b',a+b);
// console.log('this the value of a and b',a-b);
// console.log('this the value of a and b',a*b);
// console.log('this the value of a and b',a/b);
// assigment operator
// var c=b;
// c-=2;
// logical operators && ||
// function
function avg (a,b){
return (a+b)/2;
}
c1=avg(6,10);
c2=avg(25,45);
console.log(c1,c2);
// conditions in  java script
age=21;
if(age>18){
    console.log('you can  drink');

}else{
    console.log('you cannot kid')
}
// for loop
var arr =[1,2,3,4,5,6,7,8]
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// // for eachloop
// arr.forEach(function(element){
//     console.log(element)
// }
// );
// while loop
let j=0;
// while(j<arr.length){
//     console.log(arr[j])
//     j++;
// }
do{
    console.log(arr[j])
    j++;
}while(j<arr.length)