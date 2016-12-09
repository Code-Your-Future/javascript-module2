
/**	Initialize 10X10 board after the page load*/
function initializeDiv(){
	/** Get the main container the small cell reside*/
	var mainDiv=document.getElementById('main');
	/** Create small 20X35 cell box (Div) on fly and put inside the main container*/
	for(var i = 0; i<700; i++){
		/**	Create a new div cell*/
		var cellDiv=document.createElement('div');
		/** Assign the class name to the new div element*/
		cellDiv.className='cell';
		/** Insert the new div element to th emain container*/
		mainDiv.appendChild(cellDiv);
	}
}

/** Call the initialize function after the page load */
window.onload=initializeDiv;

/** Select the main container class and add mouseover event listener*/
document.querySelector('.grid').addEventListener('mouseover',function(e){
	/** Remove the class fade while mouseover*/
	e.target.classList.remove('fade');
	/** Target only the element the mouse is over or out*/
	if(e.target.className==='cell'){
		/**	Set random background colour while mouseovr */
		e.target.style.background='#' + Math.random().toString(16).slice(2, 8).toUpperCase();
		/**	Add mouseout event listener */
		e.target.addEventListener('mouseout',function (o){
			/**	Add class name fade when mouseout and change the style colour after 2 second*/
			o.target.classList.add('fade');
			/** Pass the backgrund property value to the fade class for transition*/
			o.target.style.background='transparent';
			/** Add the class name cell in order to get the original state */
			o.target.classList.add('cell');
		},false);
	}
},false);
