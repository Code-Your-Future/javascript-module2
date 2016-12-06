	var player = 1;
	var moves = 0;
	var flag=0;
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
	flag=0;
	diagonals1.splice(0,diagonals1.length);
	diagonals2.splice(0,diagonals2.length);
	diagonal1ClassName.splice(0,diagonal1ClassName.length);
	diagonal2ClassName.splice(0,diagonal2ClassName.length);

}

function play(square) {
	
	if( square.innerHTML==='' ) {
		moves++;

		if( player===1 ) {
			square.innerHTML = 'X';
			player = 2;
		}
		else {
			square.innerHTML = 'O';
			player = 1;
		}
		
		var result = winner();
		
		if( result!==false ) {
			document.getElementById('message').innerHTML = 'Game Over: '+result;
			flag=0;
		}
		else {
			document.getElementById('message').innerHTML = 'Keep playing';
		}
	}
}

/**
	*Define the function whether the user input is exist
	*@return {isEmptyEqual<element>}
*/

function isEmptyEqual(rowColArray){
	for(var i=0;i<rowColArray.length;i++){
		if(rowColArray[i].innerHTML==='')
			return true;
		else 
			return false;
		
	}
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
	* Iterate each box and check  whether the game is over
*/
	for(var row=0; row<3;row++){
		rowSquer=document.getElementsByClassName('r'+row);

/**
	* Check columens contain the same value and get one of its value X or O 
*/		
		if(!isEmptyEqual(rowSquer)){
			if( rowSquer[0].innerHTML===rowSquer[1].innerHTML &&
				rowSquer[0].innerHTML===rowSquer[2].innerHTML ) {
				markWinner(rowSquer,flag);
				return rowSquer[0].innerHTML + ' is the winner.';
			}
		}

		for(var col=0; col<3; col++){
			colSquer=document.getElementsByClassName('c'+col);

/**
	* Check columens contain the same value and get one of its value X or O 

*/
			if(!isEmptyEqual(colSquer)){
				if( colSquer[0].innerHTML===colSquer[1].innerHTML &&
					colSquer[0].innerHTML===colSquer[2].innerHTML ) {
					markWinner(colSquer,flag);
					return colSquer[0].innerHTML + ' is the winner.';
				}
			}
			
			/**
				* First Diagonal should be checked and push the value of the element 
				* (X/O)class names to the array
			*/
			if((row===0 && col===0) || (row===1 && col===1) || (row===2 && col===2)){
				if(rowSquer[row].innerHTML!='')
					{
						diagonals1.push(rowSquer[row].innerHTML);
						diagonal1ClassName.push("r"+row + " " + "c" + col);
						
					}
			}

			/**
				* Second Diagonal should be checked and push the value of the element 
				* (X/O)class names to the array
			*/
			if((row===0 && col===2) || (row===1 && col===1) || (row===2 && col===0)){
				if(colSquer[row].innerHTML!='')
					{
						diagonals2.push(colSquer[row].innerHTML)
						diagonal2ClassName.push("r"+row + " " + "c" + col);
					}
			}

		}
	}
	
	/**
		* Check each diagonals contain the same value X or O
		* Check the board is on Tie State
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
