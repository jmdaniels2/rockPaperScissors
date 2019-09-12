var userChoice = document.getElementById("choices").onclick=function(){console.log(userchoice)};



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


// onClick(function(){ console.log "Hello" })

// function playRound(playerSelection, computerSelection) {
// 	// your code here!
// }

// const playerSelection = 'rock'
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))