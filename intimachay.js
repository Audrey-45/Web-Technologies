function intimachay(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('intimachay.png')";
	document.getElementById("plazaPrincipal").style.display = "none";
	document.getElementById("labyrinth1").style.display = "none";
	document.getElementById("intimachayPerso").style.display = "none";
	document.getElementById("intimachay").style.display = "block"; 
	
	document.onkeydown = applyKey;
	function checkEventObj ( _event_ ){
		if ( window.event )
			return window.event;
		else
			return _event_;
	}	
	function applyKey (_event_){	

		var winObj = checkEventObj(_event_);
		var intKeyCode = winObj.keyCode;	
		
		if ( intKeyCode == KEY_RIGHT){
				
		
			plazaPrincipal(); 
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
				
	}
}