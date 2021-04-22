function enigmaOne(){
	if(threeDone==0){
		document.getElementById("intihuatana").style.display = "none";
		document.getElementsByTagName("body")[0].style.backgroundImage = "url('enigma.png')";
		document.getElementsByTagName("body")[0].style.textAlign = "center";
		document.getElementById("enigmaOne").style.display = "block"; 
	}
	else{
		alert("You already succeded the ENIGMAS totem"); 
		intihuatana(); 
	}
	
}
function getValueOne() {
		// Sélectionner l'élément input et récupérer sa valeur
		var input = document.getElementById("inOne").value;
		// Afficher la valeur
			
		if(input==314)
		{
			alert("You succeeded");	
			enigmaTwo(); 
		}
		else
		{
			alert("You failed. Try Again !");	
		}
		
}