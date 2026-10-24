// if else else-if
// switch case
// early return pattern

// 1. if else-if else

//if(condition resolves to true or false)

// if (loggedin && admin) {
// } else if (loggedin) {
// } else {
// }

// 2. Switch Case

// switch (value) {
//   case 1:
//     break;
//   case 2:
//     console.log("huihuihui");
//     break;
//   default:
//     console.log("Input a Command");
// }

// 3. Early Return Pattern

function getGrade(score) {
  if (score >= 90 && score <= 100) return "A+";
  else if (score >= 80 && score <= 89) return "A";
  else if (score >= 70 && score <= 79) return "B";
  else if (score >= 60 && score <= 69) return "C";
  else if (score >= 33 && score <= 59) return "D";
  else if (score >= 0 && score <= 32) return "Fail";
  else return "Invalid Marks";
}

//console.log(getGrade(90));


// Rock-Paper-Scissors Logic

function rps(user,computer){
    if(user === computer) return "draw"

    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";
    
    return "computer wins"

}

console.log(rps("scissor","paper"));
