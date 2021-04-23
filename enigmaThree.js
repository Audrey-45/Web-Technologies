function enigmaThree(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('enigma.png')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("enigmaTwo").style.display = "none";
	document.getElementById("enigmaThree").style.display = "block"; 				
}
function getValueThree() {
	var input = document.getElementById("inThree").value;
	if(input==1118)
	{
		alert("you succeeded");	
		totem3(); 
	}
	else
	{
		alert("You failed. Try Again !");	
	}
		
}
