//to know how many items are click
var itemNumber=0; 
//to know what item is click
var tabNum = [];
function number5()
{
	tabNum.push("5");  
	itemNumber++; 
	document.getElementById("num5").style.display = "none";
	labyrinth3(); 
}
function number3()
{
	tabNum.push("3"); 
	itemNumber++; 
	document.getElementById("num3").style.display = "none";
	labyrinth5(); 
}
function number1()
{
	tabNum.push("1"); 
	itemNumber++;  
	document.getElementById("num1").style.display = "none";
	labyrinth10(); 
}
function number32()
{
	tabNum.push("3"); 
	itemNumber++;  
	document.getElementById("num32").style.display = "none";
	labyrinth14(); 
}
//show the items recovered 
function countItems(){

	if(itemNumber==0)
	{
		document.getElementById("noItems").style.display="block"; 
		document.getElementById("items").style.display="none";
	}
	else
	{
		document.getElementById("noItems").style.display="none"; 
		document.getElementById("items").style.display="block";
		if(itemNumber>=1)
		{
			document.getElementById("numberOne").style.display="block";
			document.getElementById("numberOne").innerHTML =tabNum[0];
		
			if(itemNumber>=2)
			{
				document.getElementById("numberTwo").style.display="block";
				document.getElementById("numberTwo").innerHTML =tabNum[1]; 
				if(itemNumber>=3)
				{
					document.getElementById("numberThree").style.display="block";
					document.getElementById("numberThree").innerHTML =tabNum[2]; 
				
					if(itemNumber==4)
					{
						document.getElementById("numberFour").style.display="block";
						document.getElementById("numberFour").innerHTML =tabNum[3]; 
					}
				}
			}	
		}
	}
}
function getValueLock() {
	// Select the element 
	var input = document.getElementById("in").value;
		
	if(input==1533)
	{
		alert("you succeeded");	
		totem2(); 
	}
	else
	{
		alert("The resultat isn't good. Try Again !");	
	}
}


//access to the items recovered
function lockLaby1(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('lockLabyrinth.jpg')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("labyrinth1").style.display = "none";
	document.getElementById("lockLaby1").style.display = "block"; 
	document.getElementById("lockLaby").style.display = "block"; 
	countItems(); 
}
function lockLaby2(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('lockLabyrinth.jpg')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("labyrinth2").style.display = "none";
	document.getElementById("lockLaby2").style.display = "block"; 
	document.getElementById("lockLaby").style.display = "block"; 
	countItems(); 
}
function lockLaby3(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('lockLabyrinth.jpg')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("labyrinth3").style.display = "none";
	document.getElementById("lockLaby3").style.display = "block"; 
	document.getElementById("lockLaby").style.display = "block"; 
	countItems(); 
}
function lockLaby4(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('lockLabyrinth.jpg')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("labyrinth4").style.display = "none";
	document.getElementById("lockLaby4").style.display = "block"; 
	document.getElementById("lockLaby").style.display = "block"; 
	countItems(); 
}
function lockLaby5(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('lockLabyrinth.jpg')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("labyrinth5").style.display = "none";
	document.getElementById("lockLaby5").style.display = "block"; 
	document.getElementById("lockLaby").style.display = "block"; 
	countItems(); 
}
function lockLaby6(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('lockLabyrinth.jpg')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("labyrinth6").style.display = "none";
	document.getElementById("lockLaby6").style.display = "block"; 
	document.getElementById("lockLaby").style.display = "block"; 
	countItems(); 
}
function lockLaby7(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('lockLabyrinth.jpg')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("labyrinth7").style.display = "none";
	document.getElementById("lockLaby7").style.display = "block"; 
	document.getElementById("lockLaby").style.display = "block"; 
	countItems(); 
}
function lockLaby8(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('lockLabyrinth.jpg')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("labyrinth8").style.display = "none";
	document.getElementById("lockLaby8").style.display = "block"; 
	document.getElementById("lockLaby").style.display = "block"; 
	countItems(); 
}
function lockLaby9(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('lockLabyrinth.jpg')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("labyrinth9").style.display = "none";
	document.getElementById("lockLaby9").style.display = "block"; 
	document.getElementById("lockLaby").style.display = "block"; 
	countItems(); 
}
function lockLaby10(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('lockLabyrinth.jpg')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("labyrinth10").style.display = "none";
	document.getElementById("lockLaby10").style.display = "block"; 
	document.getElementById("lockLaby").style.display = "block"; 
	countItems(); 
}
function lockLaby12(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('lockLabyrinth.jpg')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("labyrinth12").style.display = "none";
	document.getElementById("lockLaby12").style.display = "block"; 
	document.getElementById("lockLaby").style.display = "block"; 
	countItems(); 
}
function lockLaby13(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('lockLabyrinth.jpg')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("labyrinth13").style.display = "none";
	document.getElementById("lockLaby13").style.display = "block"; 
	document.getElementById("lockLaby").style.display = "block"; 
	countItems(); 
}
function lockLaby14(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('lockLabyrinth.jpg')";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementById("labyrinth14").style.display = "none";
	document.getElementById("lockLaby14").style.display = "block"; 
	document.getElementById("lockLaby").style.display = "block"; 
	countItems(); 
}