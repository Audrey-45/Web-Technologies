KEY_DOWN=40;
KEY_UP=38;
KEY_RIGHT=39;
KEY_LEFT=37;

function plazaPrincipal(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('plazaPrincipal.png')";
	document.getElementById("storyEnd").style.display = "none";
	document.getElementById("intihuatana").style.display = "none";
	document.getElementById("intimachay").style.display = "none";
	document.getElementById("rocaSagrada").style.display = "none";
	document.getElementById("temploTresVentanas").style.display = "none";
	document.getElementById("labyrinth10").style.display = "none";
	document.getElementById("enigmaOne").style.display = "none";
	document.getElementById("enigmaTwo").style.display = "none";
	document.getElementById("enigmaThree").style.display = "none";
	document.getElementById("totem1").style.display = "none";
	document.getElementById("totem2").style.display = "none";
	document.getElementById("totem3").style.display = "none";
	document.getElementById("treasure").style.display = "none";
	document.getElementById("puzzle").style.display = "none";
	document.getElementById("plazaPrincipalPerso2").style.display = "none";
	document.getElementById("plazaPrincipal").style.display = "block"; 
	document.getElementById("name").value
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
		
		if (intKeyCode == KEY_UP){
				
			// --- Display Message
			intihuatana();
			
			// --- Map the keyCode in another keyCode not used
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_DOWN){
				
			// --- Display Message
			temploTresVentanas();
			
			// --- Map the keyCode in another keyCode not used
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_LEFT){
				
			// --- Display Message
			intimachay();
			
			// --- Map the keyCode in another keyCode not used
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_RIGHT){
				
			// --- Display Message
			rocaSagrada();
			
			// --- Map the keyCode in another keyCode not used
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
	}	
}