//to know if the totem is recovered or not
var oneDone=0; 	
function totem1(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "none";
	document.getElementsByTagName("body")[0].style.backgroundColor = "gray";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("puzzle").style.display = "none";
	document.getElementById("totem1").style.display = "block"; 
	oneDone=1; 
}
		