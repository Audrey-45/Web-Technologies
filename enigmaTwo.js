function enigmaTwo(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('enigma.png')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("enigmaOne").style.display = "none";
	document.getElementById("enigmaTwo").style.display = "block"; 

}

var tab = [];
function testTwo(id)
{
	tab.push(id);

	if(tab.length == 3)
	{	
		if(tab[0]=="button4" && tab[1]=="button7" && tab[2]=="button2")
		{
			alert("You succeeded"); 
			enigmaThree(); 
			tab = [];
		}
		
		else{
			alert("Try again"); 
			tab = [];
		}
	}
}