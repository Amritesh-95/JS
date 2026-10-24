// Loop is for repeating 

// 1. for , while , do while

// for(let start = 1; start<=100; start++){
//     console.log(start);    
// }

//let i=12;
// while(i<=50){
//     console.log(i);
//     i++;
// }


// do{
//     console.log(i);
//     i++
// }while(i<4);


// 2. break , continue

// for (let i = 1; i < 201; i++) {
//     if (i===5) {
//         continue;
//     }
//     console.log(i);
//     if(i===12){
//        break; 
//     }   
// }


// QUESTIONS

// Q1.

// let i = 10
// while(i>0){
//     console.log(i);
//     i--;    
// }

// Q2. 

// for(let start=1; start<21;start++){
//     if(start%2===0){
//         console.log(start)
//     }
// }

// Q3.

// let start = 1;
// while(start<16){
//     // if (start%2!==0){
//     //     console.log(start);
//     // }
//     if(start & 1){
//         console.log(start);
//     }
//     start++;
// }


// Q4.

// for(let i =1; i<11;i++){
//     //console.log("5 X "+ i + " = " + i*5);
//     console.log(`5 * ${i} = ${5*i}`);
    
// }

// Q5.

// let sum = 0;
// for(let i=1; i<101;i++){
//     sum = sum + i;   
// }
// console.log(sum);

// Q6.

// for(let i = 1; i<51; i++){
//     if(i%3===0){
//         console.log(i);
//     }
// }

// Q7. 

// let val = prompt("Give a number")
// for(let i = 1; i<=val; i++){
//     if(i%2===0){
//         console.log(`${i} is even`);   
//     }
//     else{
//         console.log(i + " is odd");  
//     } 
// }

// Q8.

// for(let i=1; i<101; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i)
//     }
// }

// Q9. First five odd number

// let count = 0;
// for(let i=1; i<100; i++){
//     if(i & 1){
//         console.log(i);  
//         count++; 
//     }
//     if(count===5){
//         break;
//     }
// }

// Q10. Count number of digits in a num 

let num = 1234
let count = 0
while(num>0){
    count++;
    num = Math.floor(num/10);
}
console.log(`Number of digits : ${count}`);



