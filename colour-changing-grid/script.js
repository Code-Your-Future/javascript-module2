// colour changing grid JS here
window.onload = function() {
//make a random color from various tutorials
function makeRandomColor() {
//creates a variable of the various characters (letters and nunmbers) 
//that make up a HEX colour    
    var colorOptions = '0123456789ABCDEF';
//creates the hash tag to combine with the characters
    var newColor = '#';
//creates a loop that will randomly select the colour matches 
//from the 16 characters to create a string of 6 characters
//to form the HEX number randomly and re-assigns it to a newColor variable.   
    for (var i = 0; i < 6; i++ ) {
        newColor += colorOptions[Math.floor(Math.random() * 16)];
    }
    return newColor;
//tests to see that the function is making random selections    
    console.log (newColor);

}
//creates 10 rows  
    for(var row = 0; row < 10; row++) {
//create a new Div element and styles them
       var rowDiv = document.createElement("div");
        rowDiv.style.lineHeight = 0;
        rowDiv.style.overflow = "hidden";
 //create 10 tileDivs to attach to rows and styles them with height, width, 
 //border, display and gives the div a className. Practising using JS solo!    
    for(var col = 0; col < 10; col++) {
        var tileDiv = document.createElement("div");
            tileDiv.style.height = "40px";
            tileDiv.style.width = "40px";
            tileDiv.style.border= "0.3px solid darkgrey";
            tileDiv.style.display = "inline-block";
//this colour is not necessary, it was just for testing purposes 
           // tileDiv.style.backgroundColor = "red";
            tileDiv.className ="square";
//joins rows and colmns together
            rowDiv.appendChild(tileDiv);
//onmouseover generates new color in the tileDiv            
            tileDiv.onmouseover = function (event1) {
                event.target.style.backgroundColor = makeRandomColor();
                event.target.style.transition = 'background-color .1s';
            }; 
//onmouseout shows the blank canvas as the mouse leaves the tileDiv            
            tileDiv.onmouseout = function (event2){
                event.target.style.backgroundColor = null;
                event.target.style.transition = 'background-color 1s';
            };
        }
        document.getElementById("rainbow").appendChild(rowDiv);
    }
}
