function storyOne(){
	document.getElementsByTagName("body")[0].style.backgroundImage =  "url('story.jpg')";
	document.getElementById("inputName").style.display = "none";
	document.getElementById("storyOne").style.display = "block"; 
	document.getElementsByTagName("body")[0].style.textAlign ="left";
	document.getElementById("welcome").innerHTML = "Welcome " + document.getElementById("name").value +"!"; 
			
}