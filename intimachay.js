function intimachay(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('intimachay.png')";
	document.getElementById("plazaPrincipal").style.display = "none";
	document.getElementById("labyrinth1").style.display = "none";
	document.getElementById("intimachayPerso").style.display = "none";
	document.getElementById("intimachay").style.display = "block"; 
	
	document.onkeydown = applyKey;
	function checkEventObj ( _event_ ){
		// --- IE explorer
		if ( window.event )
			return window.event;
		// --- Netscape and other explorers
		else
			return _event_;
	}	
	function applyKey (_event_){	
		// --- Retrieve event object from current web explorer
		var winObj = checkEventObj(_event_);
		var intKeyCode = winObj.keyCode;	
		
		if ( intKeyCode == KEY_RIGHT){
				
			// --- Display Message
			plazaPrincipal(); 
			
			// --- Map the keyCode in another keyCode not used
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
				
	}
}