	var player = 1;
	var moves = 0;
	var flag=0; // To control the user to play the game while the game is over and to style the diagonals 
/**
	* Declare the two pair diagonals array to store values (X/O) and class Name
	* @type {diagonals1<array>}  
	* @type {diagonals2<array>}
	* @type {diagonals1ClassName<array>}  
	* @type {diagonals2ClassName<array>}
*/	
	var diagonals1 = [];
	var diagonals2 = [];
	var diagonal1ClassName = [];
	var diagonal2ClassName = [];

/**
	*Define a function to restart the game
	*get all the element using class name and reset style and content to null
*/
function reset(){
	var allElement=document.getElementsByClassName("sq");
	for(var i =0;i<allElement.length;i++){
		allElement[i].style.color=null;
		allElement[i].innerHTML=null;
	}
	
	moves = 0;
	document.getElementById('message').innerHTML=null;
	clearArray();
}

/**
	* Define the function to clear diagonals values container 
*/
function clearArray(){
	flag=0;
	diagonals1.splice(0,diagonals1.length);
	diagonals2.splice(0,diagonals2.length);
	diagonal1ClassName.splice(0,diagonal1ClassName.length);
	diagonal2ClassName.splice(0,diagonal2ClassName.length);
}

function play(square) {
	
	if( square.innerHTML==='' && flag!=1) {
		moves++;

		if( player===1 ) {
			square.innerHTML = 'X';
			player = 2;
		}else {
			square.innerHTML = 'O';
			player = 1;
		}
		
		var result = winner();
		
		if( result!==false ) {
			document.getElementById('message').innerHTML = 'Game Over: ' + result;
			flag=1;
		}else {
			document.getElementById('message').innerHTML = 'Keep playing';
		}
	}
}

/**
	*Define the function that check whether the board empty
	*@return {isEmpty<boolean>}
*/

function isEmpty(rowColArray){
	var flag = true ;
	for(var i=0;i<rowColArray.length;i++){
		if(rowColArray[i].innerHTML==='')
			return true;	
		else 
			flag=false;	
	}
	return flag;
}

/**
	*Define the function which set winner to Red
	*@param {markWinner<Array, boolean>}
*/
function markWinner(elementArray,flag){
	/**
		* Access rows , columns and diagonals element and set color to Red
		*@type {diagonalClass <element>}
	*/
	var diagonalClass;
	for(var i=0; i<elementArray.length; i++){
		if(!flag){
			elementArray[i].style.color = "red";
		}else {

			/** get element by class name from the array passed by reference*/
			diagonalClass = document.getElementsByClassName(elementArray[i]);
			
			/** Style each element identified by class name  row and column*/
			diagonalClass[0].style.color='red';
		}

	}
}

function winner(){

/**
	* Players move untill Five turn 
	* @return {<boolean>}
*/	
	if( moves<5 ) {
		return false;
	}
	
/**
	*	Clear the diagonals and arrays containing class names, for fresh value 
*/
	clearArray();

/**
	*Check each rows , columns and Diagonals are match
	*Style the matching line to RED
	*@return {<string>} 
*/
	for(var row=0;row<3;row++){
		/** Get each rows*/
		rowSquer=document.getElementsByClassName('r'+row);
		/** Check whather each rows not null and they are match*/
		if(!isEmpty(rowSquer)){
			if( rowSquer[0].innerHTML===rowSquer[1].innerHTML &&
				rowSquer[0].innerHTML===rowSquer[2].innerHTML ) {
				/**Style the values (X/O) to RED iff they are match*/
				markWinner(rowSquer,flag);
				return rowSquer[0].innerHTML + ' is the winner.';
			}
		}

		for(var col=0;col<3;col++){
			/** get each colomns in a given row*/
			colSquer=document.getElementsByClassName('c'+col);
			/** Check whather each columns not null and they are match*/
			if(!isEmpty(colSquer)){
				if( colSquer[0].innerHTML===colSquer[1].innerHTML &&
					colSquer[0].innerHTML===colSquer[2].innerHTML ) {
					/**Style the values (X/O) to RED iff they are match*/
					markWinner(colSquer,flag);
					return colSquer[0].innerHTML + ' is the winner.';
				}
			}

			/** Get each rows and columns and identify each diagonals values and collect there values */
			var boardElment=document.getElementsByClassName('r'+row+" c"+col);
			/** *check r0 c2 ,r1 c1 and r2 c0 diagonal coordinates and collect 
				* there values together with there class names
			*/
			if( ((2-row)===col)){
				diagonals2.push(boardElment[0].innerHTML);
				diagonal2ClassName.push('r'+row+" c"+col);
			}
			/** *check r0 c0, r1 c1 and  r2 c2 diagonals coordinates and collect there values
				*together with there class names
			*/
			if (row===col){
				diagonals1.push(boardElment[0].innerHTML);
				diagonal1ClassName.push('r'+row+" c"+col);
			}
		}
}
				
	/**
		* Check each diagonals contain the same value X or O
		* Check the board is on Tie State
		* Style to RED the diagonals, when its match. 
	*/

	if((diagonals1[0]===diagonals1[1]) && (diagonals1[0]===diagonals1[2])){
		flag=1;
		markWinner(diagonal1ClassName,flag);
		return diagonals1[0] + ' is the winner.';
	}else if((diagonals2[0]===diagonals2[1]) && (diagonals2[0]===diagonals2[2])){
		flag=1;
		markWinner(diagonal2ClassName,flag);
		return diagonals2[0] + ' is the winner.';
	}else if (moves>8)
		return "Tie !";
	else
		return false;
	
}
