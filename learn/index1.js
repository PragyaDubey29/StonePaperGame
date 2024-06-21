
 let score = prompt("Enter your score");
 let grade;
// if(num%5==0){
//     console.log("number is multiple of 5");
// }
// else{
//     console.log("number is not multiple of 5");
// }

if(score>=80 && score <= 100){
    grade = "A";
}
else if(score>=70 && score <= 89){
    grade = "B";
}
else if(score>=60 && score<=69){
    grade = "C";
}
else if(score>=50 && score<=69){
    grade = "D";
}
else if(score>=0 && score<=49){
    grade = "F";
}
console.log("According to ypur score: your grade was", grade);