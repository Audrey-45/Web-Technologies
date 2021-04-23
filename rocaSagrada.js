function rocaSagrada(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('rocaSagrada.png')";
	document.getElementById("plazaPrincipal").style.display = "none";
	document.getElementById("rocaSagradaPerso").style.display = "none";
	document.getElementById("rocaSagrada").style.display = "block"; 
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
		
		if (intKeyCode == KEY_LEFT){
				

			plazaPrincipal(); 

			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}	
	}
}