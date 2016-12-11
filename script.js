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
			document.getElementById('message').innerHTML = 'Game Over: '+result
			
		}
		else {
			document.getElementById('message').innerHTML = 'Keep playing';
		}
	}
}

function checkGameOver() {
	// 1st: check if theres less 5 moves
	if(moves<5) {
      
		return false;
        
	}
	
	// 2nd: check for winner lines
	// var row1 = document.getElementsByClassName('r1');
	// if( row1[0].innerHTML!=='' &&
	// 		row1[0].innerHTML===row1[1].innerHTML &&
	// 		row1[0].innerHTML===row1[2].innerHTML) {
	// 	return row1[0].innerHTML + ' is the winner.';}
		if (moves >= 5) {
			return checkLine('r1') || checkLine('r2') || checkLine('r3') ||
			 checkLine('c1') || checkLine('c2') || checkLine('c3') || checkLine('b1') || checkLine('g1');       
		}
			 
	// var row2 = document.getElementsByClassName('r2');
	
	// if( row2[0].innerHTML!=='' &&
	// 		row2[0].innerHTML===row2[1].innerHTML &&
	// 		row2[0].innerHTML===row2[2].innerHTML) {
	// 	return row2[0].innerHTML + ' is the winner.';
	
	// }
	// var row3 = document.getElementsByClassName('r3');
	
	// if( row3[0].innerHTML!=='' &&
	// 		row3[0].innerHTML===row3[1].innerHTML &&
	// 		row3[0].innerHTML===row3[2].innerHTML) {
	// 	return row3[0].innerHTML + ' is the winner.';
	
	// }
	
	// var colr1 = document.getElementsByClassName('c1');
	
	// if( colr1[0].innerHTML!=='' &&
	// 		colr1[0].innerHTML===colr1[1].innerHTML &&
	// 		colr1[0].innerHTML===colr1[2].innerHTML) {
	// 	return colr1[0].innerHTML + ' is the winner.';
	
	// }
	// var colr2 = document.getElementsByClassName('c2');
	
	// if( colr2[0].innerHTML!=='' &&
	// 		colr2[0].innerHTML===colr2[1].innerHTML &&
	// 		colr2[0].innerHTML===colr2[2].innerHTML) {
	// 	return colr2[0].innerHTML + ' is the winner.';

	// }
	// var colr3 = document.getElementsByClassName('c3');
	
	// if( colr3[0].innerHTML!=='' &&
	// 		colr3[0].innerHTML===colr3[1].innerHTML &&
	// 		colr3[0].innerHTML===colr3[2].innerHTML) {
	// 	return colr3[0].innerHTML + ' is the winner.';
	
	// }
	// var slo1 = document.getElementsByClassName('r1', 'r2', 'r3', 
	// 	'c1', 'c2', 'c3');
	
	//  if( slo1[0].innerHTML!=='' &&
	//  		colr1[0].innerHTML===colr2[1].innerHTML &&
	//  		colr1[0].innerHTML===colr3[2].innerHTML) {
	//  	return slo1[0].innerHTML + ' is the winner.';
	
	// }
	// var slop2 = document.getElementsByClassName('r1', 'r2', 'r3', 
	// 	'c1', 'c2', 'c3');
	
	// if( slop2[2].innerHTML!=='' &&
	// 		row1[2].innerHTML===row2[1].innerHTML &&
	// 		row1[2].innerHTML===row3[0].innerHTML) {
	// 	return slop2[2].innerHTML + ' is the winner.';
	
	// }
	// 3rd: check if board is full
	if(moves>8){
		return "It's a tie";
	}
	// continue game
	else
		return false;
}
 function checkLine(className) {
 	var line = document.getElementsByClassName(className);
 	var sameXOrO = ""
 	for (var i = 0; i < line.length; i++) {
 			sameXOrO += line[i].innerHTML 
 	}
 	if (sameXOrO === "XXX" || sameXOrO === "OOO") {
 		return line[0].innerHTML + " is the winner" ;
 	}
 }
