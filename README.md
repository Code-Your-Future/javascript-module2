# JavaScript II - Class 2

Topic to cover:
- DOM events
- Callback Functions
- JSON
- Introduction to libraries: jQuery
- Introduction to APIs

## DOM events

Types of Events: Mouse, Keyboard, Touch, Frame/Object, Form.
http://www.w3schools.com/jsref/dom_obj_event.asp
- Mouse
    - Click, MouseOver, MouseOut
- Keyboard
    - KeyPress, KeyDown, KeyUp
- Touch
    - TouchStart, TouchEnd, TouchMove
- Frame
    - Load, Resize, Scroll
- Form
    - Focus, Change, Submit

### Define events as attributes
The use of *onclick*:
```
<div onclick="myFunction()">Hello, click me</div>
```

### Event Propagation
![N|Solid](https://www.kirupa.com/html5/images/dom_capturing_72.png)


## Callback Functions
Read: http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

### Event Listeners
Read: http://www.w3schools.com/js/js_htmldom_eventlistener.asp
```
element.addEventListener("click", myFunction);

function myFunction() {
    alert ("Hello World!");
}
```

> **In Class Excersice**
> Create an interface with a menu and several buttons that, when clicked, show and hide different elements.

## Homework 1 (27 November class)
Create a flow diagram and pseudo-code for the game you coded last homework.
- If you didn't code the game, this is your second chance to code it now!
- If you did code the game, try coding a new, more complicated game of your choice.

## Homework 2 (4 December class)

1. Complete the tic-tac-toe game function to check if there's a winner.
	- Code is under _/tictactoe-game_ in this repo.
	- BONUS: Highlight the winning "line". eg. make the 3 winning X's or O's to be red.
	- BONUS 2: Add a button that calls a function to reset the board and restart the game.
2. Watch video: https://m.youtube.com/watch?v=XL9Ri8pO68w
3. Create a colour changing grid:
	- Create a grid of at least 10x10 squares.
	- Use *mouse events* to change the colour of each cell when you mouse over it.
	- Use *mouse events* to change the colour back to the original when you mouse out of it.
	- BONUS: make the color fade in and out instead of changing it instantly. Hint: use CSS classes and the property *transition-duration*.
	- NOTE: try to change an element's _class_ rather than its _css_ properties. Please ask questions on the class group if you don't know where to start.
4. Check reading material for next class (below) and take freeCodeCamp lessons on "JSON APIs and Ajax".
	- You will need to learn some jQuery to do the code camp, so please ask any question you have about it.

# Reading for Next Class

## Introduction to libraries: jQuery
Read: https://en.wikipedia.org/wiki/List_of_JavaScript_libraries
Read: http://www.w3schools.com/jquery/

## JSON
Read: http://www.w3schools.com/js/js_json_intro.asp

> **In Class Excersice**
> Take the previous interface and add a JSON variable containing data. The click events now must access different parts of this data. 
> Extra: Add jQuery to your interface. Try to convert your previously written JavaScript into jQuery.

## Introduction to APIs
Watch: https://www.youtube.com/watch?v=s7wmiS2mSXY
Read: https://www.mobapi.com/apis-introduction-and-context/

![N|Solid](https://www.mobapi.com/wp-content/uploads/2015/09/API-EN.png)
