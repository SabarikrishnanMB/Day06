

// Fixed code to get the largest of three.

let aa = (f,s,t) => {
    console.log(f, s, t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);


// Fixed code to Sum of the digits present in the number

function add(n)
{
let sum =0;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}
console.log(add([1,2,3]));


// Fixed code to Sum of all numbers using IIFE function

(function() {
const arr = [9,8,5,6,4,3,2,1];
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
})();


// 4.Fixed code to gen Title caps.

var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i]);
 }
}
ano(arr);

// Fixed code to return the Prime numbers.

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){
 if(num%i!==0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime);

// Fixed code to sum the number in that array.

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const result = num.reduce(sum)
console.log(result);

// Print all odd numbers in an array using IIFE function

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})();


// Fixed code to reverse.

(function(str){
    str1 = str.split("").reverse().join(" ");
    console.log(str1); 
   })("abcd")

// Fixed code to remove duplicates.

   var res = function(arr){
    for(var i=0; i < arr.length; i++){
    newArr = [];
    if(newArr.indexOf(arr[i]) != arr) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   }
   res(["guvi","geek","guvi","duplicate","geeK"])


// Fixed code to give the Sum of odd numbers in an array

   var as=[12,34,5,6,2,56,6,2,1];
    let odsss = []
    for(let key of as){
        if(key%2!==0){
        odsss.push(key)
        }
    }
    var s=odsss.reduce(function(a,c){
     return a + c
    });
    console.log(s)

