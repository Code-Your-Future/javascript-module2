//Original Code Started by David
var player = 1;
var moves = 0;

function play(square) {
	var result = checkGameOver();
	
	if( result!==false ) {
		return result;
	}
	if(square.innerHTML==='') {
		moves++;

		if(player===1) {
			square.innerHTML = 'X';
			player = 2;
		}
		else {
			square.innerHTML = '&#10084';//Heart Shape for 'O'
			player = 1;
		}
		result = checkGameOver();
	
	if( result!==false ) {
			document.getElementById('message').innerHTML = 'Game Over: '+result;
	}
		else {
			document.getElementById('message').innerHTML = 'Keep Playing';
		}
	}
}

function checkGameOver() {
	// 1st: check if theres less 5 moves
	if(moves<5) {
		return false;
	}
	// 2nd: check for winner lines
	var row1 = document.getElementsByClassName('r1');
	var row2 = document.getElementsByClassName('r2');
	var row3 = document.getElementsByClassName('r3');
	//row1 wins and changes color of winning line
	if( row1[0].innerHTML!=='' && row1[0].innerHTML===row1[1].innerHTML &&
			row1[0].innerHTML===row1[2].innerHTML) {
				row1[0].style.color = "#F2FA05";
				row1[1].style.color = "#F2FA05";
				row1[2].style.color = "#F2FA05";
			return 'Player with ' + row1[0].innerHTML + ' is the winner.';
	//row2 wins and changes color of winning line
	}else if (row2[0].innerHTML!=='' && row2[0].innerHTML===row2[1].innerHTML &&
			row2[0].innerHTML===row2[2].innerHTML){
				row2[0].style.color = "#F2FA05";
				row2[1].style.color = "#F2FA05";
				row2[2].style.color = "#F2FA05";
			return 'Player with ' + row2[0].innerHTML + ' is the winner.';
	//console.log(row2[0].innerHTML) testing to see divs
	// row3 wins and changes color of winning line
	}else if (row3[0].innerHTML!=='' && row3[0].innerHTML===row3[1].innerHTML &&
			row3[0].innerHTML===row3[2].innerHTML){
				row3[0].style.color = "#F2FA05";
				row3[1].style.color = "#F2FA05";
				row3[2].style.color = "#F2FA05";
		return 'Player with ' + row3[0].innerHTML + ' is the winner.';
	//diagnol1 wins and changes color of winning line
	}else if (row1[0].innerHTML!=='' && row1[0].innerHTML===row2[1].innerHTML && 
			row1[0].innerHTML===row3[2].innerHTML){
				row1[0].style.color = "#F2FA05";
				row2[1].style.color = "#F2FA05";
				row3[2].style.color = "#F2FA05";
		return 'Player with ' + row1[0].innerHTML + ' is the winner.';
	//diagnol2 wins and changes color of winning line
	}else if(row1[2].innerHTML!=='' && row1[2].innerHTML===row2[1].innerHTML &&
			row1[2].innerHTML===row3[0].innerHTML){
				row1[2].style.color = "#F2FA05";
				row2[1].style.color = "#F2FA05";
				row3[0].style.color = "#F2FA05";
		return 'Player with ' + row1[2].innerHTML + ' is the winner.';
	//colomn 1 and changes color of winning line
	}else if (row1[0].innerHTML!=='' && row1[0].innerHTML===row2[0].innerHTML &&
			row1[0].innerHTML===row3[0].innerHTML){
				row1[0].style.color = "#F2FA05";
				row2[0].style.color = "#F2FA05";
				row3[0].style.color = "#F2FA05";
		return 'Player with ' + row1[0].innerHTML + ' is the winner.';
	//colomn 2 and changes color of winning line
	}else if (row1[1].innerHTML!=='' && row1[1].innerHTML===row2[1].innerHTML &&
			row1[1].innerHTML===row3[1].innerHTML){
				row1[1].style.color = "#F2FA05";
				row2[1].style.color = "#F2FA05";
				row3[1].style.color = "#F2FA05";
		return 'Player with ' + row1[1].innerHTML + ' is the winner.';  
	//colomn 3 and changes color of winning line
	}else if (row1[2].innerHTML!=='' && row1[2].innerHTML===row2[2].innerHTML &&
			row1[2].innerHTML===row3[2].innerHTML){
				row1[2].style.color = "#F2FA05";
				row2[2].style.color = "#F2FA05";
				row3[2].style.color = "#F2FA05";
		return 'Player with ' + row1[2].innerHTML + ' is the winner.';  
	}
	// 3rd: check if board is full
	else if(moves>8){
		return "It's a tie";
	}
	// continue game
	else
		return false;
}

function refresh(){
	location.reload(true);

}