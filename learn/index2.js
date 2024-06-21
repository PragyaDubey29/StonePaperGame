// //for loop
// for(let i =0 ;i<=100;i++){
// if(i%2==0){ //even number
//     console.log("Even numbers = ", i);
// }
// }

//game
let gamenumber = 25;
let guessNumber = prompt("Guess a number");
while(guessNumber!=gamenumber){
 guessNumber = prompt("You enetered a wrong number: Guess again");
}
console.log("Conguratulation!! you won the game");