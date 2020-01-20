var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var resetBtn = document.querySelector("#resetBtn");
var numInput = document.querySelector("#numInput");
var winningScoreDisplay = document.querySelector("#winningScoreDisplay");
var player1Counter = document.querySelector('#player1Counter');
var player2Counter = document.querySelector('#player2Counter');
var player1Score = 0;
var player2Score = 0;
var gameOver = false;
var winningScore = 5;

function reset(){
	player1Score = 0;
	player2Score = 0;
	player1Counter.textContent = player1Score;
	player2Counter.textContent = player2Score;
	player1Counter.style.color = "black";
	player2Counter.style.color = "black";
	gameOver = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});

player1.addEventListener("click", function(){
	if(gameOver === false){
		player1Score++;
		if(player1Score === winningScore){
			player1Counter.style.color = "green";
			gameOver = true;
		}
		player1Counter.textContent = player1Score;
	};
});

player2.addEventListener("click", function(){
	if(gameOver === false){
		player2Score++;
		if(player2Score === winningScore){
			player2Counter.style.color = "green";
			gameOver = true;
		}
		player2Counter.textContent = player2Score;
	};
});

resetBtn.addEventListener("click", function(){
	reset();
});