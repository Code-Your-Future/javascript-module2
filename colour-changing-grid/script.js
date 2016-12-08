// colour changing grid JS here
function randomNumber (range) {
	return Math.floor(Math.random()*range);
};
function mOver(obj) {
  obj.style.backgroundColor = "rgb(" + randomNumber(258) +","+ randomNumber(258) +","+ randomNumber(258) + ")";
  obj.style.borderRadius = "10px";
  obj.style.transitionDuration = "0s";
};
function mOut(obj) {
  obj.style.backgroundColor = "transparent";
  obj.style.border = "1px" + " " + "solid" + " " + "red" ;
  obj.style.borderRadius = "0px";
  obj.style.transitionDuration = "2s";
};

