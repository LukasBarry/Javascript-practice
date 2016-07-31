// var x = true;
// if(x) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// var cups = prompt("How many cups of coffee have you had?")
//
// if (Number(cups) < 3) {
//   console.log("Yes, I will take another cup of coffee")
// } else {
//   console.log("I think I'm ok for now")
// };

// var temp = 90;
// var precip = false;
// var indoors = true;
//
// console.log("The temperaure is " + temp + " degrees");
// if ((temp > 80 && precip === false) || indoors === true) {
//   console.log("Time to swim!")
// };

// for (var i = 99; i >= 1; i --) {
//     console.log(i + " Bottles of Beer on the wall, " + i + " Bottles of Beer.");
// }

//rock paper scissors in javascript
// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
// 	computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
// 	computerChoice = "paper";
// } else {
// 	computerChoice = "scissors";
// } console.log("Computer: " + computerChoice);
// var compare = function(choice1, choice2) {
//     if (choice1 === choice2) {
//         return "The result is a tie!";
//     }
//     else if (choice1 === "rock") {
//         if (choice2 === "scissors") {
//             return "rock wins";
//         }
//         else {
//             return "paper wins";
//         }
//     }
//     else if (choice1 === "paper") {
//         if (choice2 === "rock") {
//             return "paper wins";
//         }
//         else {
//             return "scissors win";
//         }
//     }
//     else if (choice1 === "scissors") {
//         if (choice2 === "rock") {
//             return "rock wins";
//         }
//         else {
//             return "scissors win";
//         }
//     }
// };
// compare(userChoice, computerChoice);

var course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane'],
    students: [
        {
            name: 'Steve',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        },
        {
            name: 'Katy',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        },
        {
            name: 'Chuck',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        }

    ],
    preReqs : {
        skills : ['html', 'css', 'git'],
        equipment: {
            laptop: true,
            OSOptions: ['linux', 'osx']
        }
    }
};
