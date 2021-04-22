function enigmaThree(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('enigma.png')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("enigmaTwo").style.display = "none";
	document.getElementById("enigmaThree").style.display = "block"; 				
}
function getValueThree() {
		// Sélectionner l'élément input et récupérer sa valeur
	var input = document.getElementById("inThree").value;
	// Afficher la valeur
		
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
