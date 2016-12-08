var player = 1;
var moves = 0;
var gameFinish = false;
function play(square) {
	if ((square.innerHTML === '') && (!gameFinish)) {
		moves++;
		if(player===1) {
			square.innerHTML = 'X';
			player = 2;
		}else {
			square.innerHTML = 'O';
			player = 1;
		};
		var result = checkGameOver();
		if( result!==false ) {
			gameFinish = true;
			document.getElementById('message').innerHTML = 'Game Over: '+result;
		}else {
			document.getElementById('message').innerHTML = 'Keep playing';
		};
	};
};
function checkGameOver() {
	// 1st: check if theres less 5 moves
	if(moves<5) {
		return false;
	};
	// 2nd: check for winner lines
	var result = winner();
	if (result) {
		return result;
	};
	// 3rd: check if board is full
	if(moves>8){
		return "It's a tie";
	}// continue game
	else {
		return false;
	};
};
function winner() {
	var arr = document.getElementsByClassName('sq');
	var i = 0;
	var j = 0;
	if ((arr[0].innerHTML !== '') && (arr[0].innerHTML === arr[4].innerHTML) && (arr[0].innerHTML === arr[8].innerHTML)) {
		arr[0].style.backgroundColor = 'red';
		arr[4].style.backgroundColor = 'red';
		arr[8].style.backgroundColor = 'red';
		return arr[4].innerHTML + ' is the winner.';
	};
	if ((arr[2].innerHTML !== '') && (arr[2].innerHTML === arr[4].innerHTML) && (arr[2].innerHTML === arr[6].innerHTML)) {
		arr[2].style.backgroundColor = 'red';
		arr[4].style.backgroundColor = 'red';
		arr[6].style.backgroundColor = 'red';
		return arr[4].innerHTML + ' is the winner.';
	};
	// checking rows
	while (i<arr.length) {
		if ((arr[i].innerHTML !== '') && (arr[i].innerHTML === arr[i+1].innerHTML) && (arr[i].innerHTML === arr[i+2].innerHTML)) {
			arr[i].style.backgroundColor = 'red';
			arr[i+1].style.backgroundColor = 'red';
			arr[i+2].style.backgroundColor = 'red';
			return arr[i].innerHTML + ' is the winner.';
		}else if (i<arr.length-3) {
			i += 3;
		}else {
			// checking columns
			while (j<arr.length) {
				if ((arr[j].innerHTML !== '') && (arr[j].innerHTML === arr[j+3].innerHTML) && (arr[j].innerHTML === arr[j+6].innerHTML)) {
					arr[j].style.backgroundColor = 'red';
					arr[j+3].style.backgroundColor = 'red';
					arr[j+6].style.backgroundColor = 'red';
					return arr[j].innerHTML + ' is the winner.';
				}else if (j!=2) {
					j++ ;
				}else {
					return false;
				};
			};
		};
	};
};
// reset all values
function resetPlay() {
	var arr = document.getElementsByClassName('sq');
	for (var i = 0; i < arr.length; i++) {
		arr[i].innerHTML = '';
		arr[i].style.backgroundColor = 'transparent';
	};
	player = 1;
	moves = 0;
	gameFinish = false;
	document.getElementById('message').innerHTML = 'start play';
};
