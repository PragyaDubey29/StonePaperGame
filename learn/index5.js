// function constVowl(msg) {
//     let count = 0;
// for(const char of msg){
// console.log(char);
// if(char==="a"|| char==="e" || char ==="i" || char === "o" || char ==="u"){
// count++;
// }
// }
// console.log(count);
// }
// arrow function

// constVowl = (msg) => {
//     let count = 0;
// for(const char of msg){
// console.log(char);
// if(char==="a"|| char==="e" || char ==="i" || char === "o" || char ==="u"){
// count++;
// }
// }
// console.log(count);
// }


//map method
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((val) => {
//   return val;
// });

//for each loop
// arr.forEach( val => {
//   console.log(val*val);
// }) 

//filter 

// let arr = [1, 2, 4, 5, 3, 18, 7];
// let newArr = arr.filter((val)=>{
// return val%2 === 0;
// })


// let marks = [23, 45, 43,92, 90,120, 20,, 96, 78];
// let newArr = marks.filter((val)=>{
// return val >90;
// });

let n = prompt("ENter any number");
let arr = [];
for(let i =0; i<=n; i++){
    arr[i-1]= i;
}
console.log(arr);

let sum = arr.reduce((res, curr)=>{
return res*curr;
})
console.log(sum);