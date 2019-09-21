//points variables & logging variables and functions:
let computerPoints = 0;
let userPoints = 0;

function computerPlay() {
	let choices = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}


// whole game function
function gameInstance() {
	//prompt: user decision
	userPrompt = prompt('choose your weapon:');
	// ^ this is missing something


	//computer's decision 
	let compPlay = computerPlay();

	//conditions of game    
	if (userPrompt === "rock") {
		// I expanded your `if` statements here, I did not change any of the ordering of anything
		if (compPlay === "rock") {
			alert(`computer chose: ${compPlay},  user chose: ${userPrompt} :its a tie!`);
		} else if (compPlay === "paper") {
			alert(`computer chose: ${compPlay},  user chose: ${userPrompt} :computer wins!`);
			computerPoints++; 
		} else if (compPlay === "scissors") {
			alert(`computer chose: ${compPlay},  user chose: ${userPrompt} :user wins!`);
			userPoints++;
		}
	} else if (userPrompt === "paper") {
		if (compPlay === "rock") {
			alert(`computer chose: ${compPlay},  user chose: ${userPrompt} :user wins!`);
			userPoints++;
		} else if (compPlay === "paper") {
			alert(`computer chose: ${compPlay},  user chose: ${userPrompt} :its a tie!`);
		} else if (compPlay === "scissors") {
			alert(`computer chose: ${compPlay},  user chose: ${userPrompt} :computer wins!`);
			computerPoints++;
		}
	} else if (userPrompt === "scissors") {
		if (compPlay === "rock") {
			alert(`computer chose: ${compPlay},  user chose :${userPrompt} :computer wins!`);
			computerPoints++;
		} else if (compPlay === "paper") {
			alert(`computer chose: ${compPlay},  user chose: ${userPrompt} :user wins!`);
			userPoints++;
		} else if (compPlay === "scissors") {
			alert(`computer chose: ${compPlay},  user chose: ${userPrompt} :its a tie!`);
		}
	}
}

function displayScores(userWins, computerWins) {   
  console.log(`Player Points: ${userWins}`);
  console.log(`Computer Points: ${computerWins}`);    
}

// Discussion here:



// all rounds of rps
function allRounds() {
	gameInstance();
	gameInstance();
	gameInstance();
	gameInstance();
	gameInstance();

	displayScores(userPoints, computerPoints); 

	// Reset the points, so all we have to do is call 'allRounds' again to play a new
	userPoints = 0;
	computerPoints = 0;
};

// Finally call the function to run the game
allRounds(); 
























// //what is referred to as the "dom?"
// let userScore=0;
// let computerScore=0;
// const userScore_span = document.getElementById('user-score');
// const computerScore_span = document.getElementById('computer-score');
// const paper_div = document.getElementById('p');
// const scissors_div = document.getElementById('s');

// //how the computer is choosing

// function getComputerChoice(){
//   const choices =['r' , 'p' , 's'];
//   const randomNumber = Math.floor(Math.random()*3);
//   return choices[randomNumber];
// };
// //event listeners

// function main(){
//   rock_div.addEventListener('click', function(){
//     game('r');
//   });
//   paper_div.addEventListener('click', function(){
//     game('p');
//   });
//   scissors_div.addEventListener('click' , function(){
//     game('s')
//   });
// };

// main();

// //functions built into the outcomes
// function win(){
//   console.log('win')
//   userScore++;
// };
// function lose() {
//   console.log('lose')
//   computerScore++;
// };
// function tie(){
//   console.log('tie')
// };


// // outcomes

// function game(userChoice){
//   const computerChoice = getComputerChoice();
//   console.log("user choice => " + userChoice);
//   console.log("computer choice => " + computerChoice);
// switch(userChoice + computerChoice){
//   case 'rs':
//   case 'pr':
//   case 'sp':
//   win();
//     break;
//   case 'rp':
//   case 'ps':
//   case 'sr':
//   lose();
//     break;
//   case 'pp':
//   case 'rr':
//   case 'ss':
//   tie();
//   break;
// }
// };





// // //********************************************************** */
// // // this was the help that you receieved. do not use it until you know how it works.

// // const options = document.querySelectorAll('.option');
// // // Add event listeners 
// // options.forEach(function(option) {
// //   option.addEventListener('click', function(e) {
// //     const userChoice = e.target.id; 
// //     return playRound(userChoice, computerPlay());
// //   });
// // });

// // // Function to get computers choice
// // const computerPlay = () => {
// //   const rps =[ 'r', 'p', 's'];
// //   const min=1;
// //   const max=3;
// //   const rnum = Math.floor(Math.random() * 3); 
// //   return rps[rnum];
// // };

// // //review what this
// // const playRound = (playerSelection, computerSelection) => {
// //  	alert(`Player: ${playerSelection} Computer: ${computerSelection}`);
// // }

// //********************************************************** */
// //********************************************************** */
// //********************************************************** */
// //********************************************************** */


// //*********  this was all your attempts until someone corrected you, 
// //*******Review your attempts after further review of what functions are and

// // // var userChoice = document.getElementById("choices").onclick=function(){console.log(userchoice)};
// // // let playerSelection1= document.getElementById("s").addEventListener('click',function(){return("s")});
// // // let playerSelection2= document.getElementById("p").addEventListener('click',function(){return("p")});

// // // let playerSelection= document.getElementById("r").addEventListener('click',function(){return(playerSelection)});


// // const options = document.querySelectorAll('.option');

// // var  userPlay = 

// // options.forEach(function(option) {
// //   option.addEventListener('click', function(e) {
// //     console.log(e.target.id);
// //   });
// // });
// // //************************* */
// // var computerPlay= 

// // function computerPlay(){
// //   var rps =[ 'r', 'p', 's'];
// //   var min=1;
// //   var max=3;
// //   var rnum = Math.floor(Math.random() * 3); 
// //   console.log(rps[rnum])
 
// // };
// // //********************************** */

// // document.getElementById("choices").onclick = function(){
// //     computerPlay(this.addEventListener);
// // };

// // if(console.log(computerPlay,userPlay)){
// //     alert("you win!")
// // }else alert("loser!")


// // // function playRound(playerSelection, computerSelection) {
// // // 	// your code here!
// // // }

// // // const playerSelection = 'rock'
// // // const computerSelection = computerPlay()
// // // console.log(playRound(playerSelection, computerSelection))