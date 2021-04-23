function victory(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('bleu.png')";
	document.getElementById("treasure").style.display = "none";
	document.getElementById("victory").style.display = "block"; 
	
	var audio=document.createElement('audio');
	var first=true;
		window.addEventListener('mousedown',onmousedown);
	 //click to active the sound because Google Chrome block it 
		function onmousedown(){
		   if(!first) return;
		   first=false;
		   audio.src="chest.mp3";
		   audio.play();
		}
	document.getElementById('idvideo').addEventListener('ended',myHandler,false);
	function myHandler(e) {
		window.location.href="./victory.html" 
	
	}
}