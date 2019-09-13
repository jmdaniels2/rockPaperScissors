// var userChoice = document.getElementById("choices").onclick=function(){console.log(userchoice)};
// let playerSelection1= document.getElementById("s").addEventListener('click',function(){return("s")});
// let playerSelection2= document.getElementById("p").addEventListener('click',function(){return("p")});

// let playerSelection= document.getElementById("r").addEventListener('click',function(){return(playerSelection)});


const options = document.querySelectorAll('.option');

options.forEach(function(option) {
  option.addEventListener('click', function(e) {
    console.log(e.target.id);
  });
});

function computerPlay(){
    var rps =[ 'r', 'p', 's'];
    var min=1;
    var max=3;
    var rnum = Math.floor(Math.random() * 3); 
    console.log(rps[rnum])
   
};

document.getElementById("choices").onclick = function(){
    computerPlay(this.addEventListener);
};

if(console.log()){
    alert("you win!")
}else(alert("loser!"))
};

// function playRound(playerSelection, computerSelection) {
// 	// your code here!
// }

// const playerSelection = 'rock'
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))