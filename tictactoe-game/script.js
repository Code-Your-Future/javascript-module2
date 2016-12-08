var player = 1;
var moves = 0;

function play(square) {
	if(square.innerHTML==='') {
		moves++;

		if(player===1) {
			square.innerHTML = 'X';
			player = 2;
		}
		else {
			square.innerHTML = 'O';
			player = 1;
		}

		var result = checkGameOver();

		if( result!==false ) {
			document.getElementById('message').innerHTML = 'Game Ends: '+ result;
		} else {
			document.getElementById('message').innerHTML = 'Keep playing';
		}
	}
}

function checkGameOver() {
	// 1st: check if theres less 5 moves
	if(moves<5) {
		return false;
	}

	if(moves >= 5) {
		return checkLine('r','1') || checkLine('r','2') || checkLine('r','3') ||
					 checkLine('c','1') || checkLine('c','2') || checkLine('c','3') ||
					 checkLine('b','1') || checkLine('g','1');
	}

	// 3rd: check if board is full
	if(moves>8){
		return "It's a tie";
	}
	// continue game
	else
		return false;
}

function checkLine(row, colum) {
	// 2nd: check for winner lines
	var line = document.getElementsByClassName(row + colum);
	var sameValue = "";
	for (var i = 0; i< line.length; i++){
		sameValue += line[i].innerHTML;
	}

	if(sameValue === "XXX" || sameValue === "OOO") {
			return line[0].innerHTML + " is the winner";
	}
}
