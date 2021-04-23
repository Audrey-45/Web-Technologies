function labyrinth1(){
	if(twoDone==0){

		document.getElementsByTagName("body")[0].style.backgroundImage = "url('1.png')";
		document.getElementById("intimachay").style.display = "none";
		document.getElementById("labyrinth2").style.display = "none";
		document.getElementById("labyrinth3").style.display = "none";
		document.getElementById("lockLaby1").style.display = "none";
		document.getElementById("lockLaby").style.display = "none";
		document.getElementById("labyrinth1").style.display = "block"; 
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
			
			if ( intKeyCode == KEY_UP){	
				
				labyrinth2(); 
				
				winObj.keyCode = intKeyCode = REMAP_KEY_T;
				winObj.returnValue = false;
				return false;
			}
			else if ( intKeyCode == KEY_DOWN){
				
				labyrinth3(); 
				
				winObj.keyCode = intKeyCode = REMAP_KEY_T;
				winObj.returnValue = false;
				return false;
			}		
		}
	}
	else{
		alert("You already succeded the LABYRINTH totem"); 
		intimachay(); 
	}

	}
	function labyrinth2(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('2.png')";
	document.getElementById("labyrinth1").style.display = "none";
	document.getElementById("labyrinth3").style.display = "none";
	document.getElementById("lockLaby2").style.display = "none";
	document.getElementById("lockLaby").style.display = "none";
	document.getElementById("labyrinth2").style.display = "block"; 
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
		
		if ( intKeyCode == KEY_UP){
				
			
			labyrinth3();
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_DOWN){
				
			
			labyrinth1(); 
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
				
	}
	}
	function labyrinth3(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('3.png')";
	document.getElementById("labyrinth1").style.display = "none";
	document.getElementById("labyrinth2").style.display = "none";
	document.getElementById("labyrinth4").style.display = "none";
	document.getElementById("lockLaby3").style.display = "none";
	document.getElementById("lockLaby").style.display = "none";
	document.getElementById("labyrinth3").style.display = "block"; 
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
		
		if ( intKeyCode == KEY_UP){
				
			
			labyrinth1();
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_DOWN){
				
			
			labyrinth2(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_LEFT){
				
			
			labyrinth4(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
				
	}
	}
	function labyrinth4(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('4.png')";
	document.getElementById("labyrinth7").style.display = "none";
	document.getElementById("labyrinth6").style.display = "none";
	document.getElementById("labyrinth5").style.display = "none";
	document.getElementById("labyrinth3").style.display = "none";
	document.getElementById("lockLaby4").style.display = "none";
	document.getElementById("lockLaby").style.display = "none";
	document.getElementById("labyrinth4").style.display = "block"; 
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
		
		if ( intKeyCode == KEY_UP){
				
			
			labyrinth7(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_DOWN){
				
			
			labyrinth3(); 
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_LEFT){
				
			
			labyrinth6();
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_RIGHT){
				
			
			labyrinth5();
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
			
			
	}
	}
	function labyrinth5(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('5.png')";
	document.getElementById("labyrinth4").style.display = "none";
	document.getElementById("lockLaby5").style.display = "none";
	document.getElementById("lockLaby").style.display = "none";
	document.getElementById("labyrinth5").style.display = "block"; 
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
		
		if ( intKeyCode == KEY_LEFT){
				
			
			labyrinth4(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
				
	}
					
	}
	function labyrinth6(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('6.png')";
	document.getElementById("labyrinth4").style.display = "none";
	document.getElementById("lockLaby6").style.display = "none";
	document.getElementById("lockLaby").style.display = "none";
	document.getElementById("labyrinth6").style.display = "block"; 
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
				
			
			labyrinth4(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
				
	}
					
	}
	function labyrinth7(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('7.png')";
	document.getElementById("labyrinth8").style.display = "none";
	document.getElementById("labyrinth12").style.display = "none";
	document.getElementById("labyrinth4").style.display = "none";
	document.getElementById("lockLaby7").style.display = "none";
	document.getElementById("lockLaby").style.display = "none";
	document.getElementById("labyrinth7").style.display = "block"; 
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
		
		if ( intKeyCode == KEY_UP){
				
			
			labyrinth12(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_DOWN){
				
			
			labyrinth4(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_LEFT){
				
			
			labyrinth8(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
				
	}
		
	}
	function labyrinth8(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('8.png')";
	document.getElementById("labyrinth7").style.display = "none";
	document.getElementById("labyrinth9").style.display = "none";
	document.getElementById("labyrinth13").style.display = "none";
	document.getElementById("lockLaby8").style.display = "none";
	document.getElementById("lockLaby").style.display = "none";
	document.getElementById("labyrinth8").style.display = "block"; 
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
				
			
			labyrinth7(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_UP){
				
			
			labyrinth9(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_LEFT){
				
			
			labyrinth13(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		
				
	}
		
	}
	function labyrinth9(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('9.png')";
	document.getElementById("labyrinth10").style.display = "none";
	document.getElementById("labyrinth8").style.display = "none";
	document.getElementById("lockLaby9").style.display = "none";
	document.getElementById("lockLaby").style.display = "none";
	document.getElementById("labyrinth9").style.display = "block"; 
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
		
		if ( intKeyCode == KEY_UP){
				
			
			labyrinth10(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_DOWN){
				
			
			labyrinth8(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
				
	}
	}
	function labyrinth10(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('10.png')";
	document.getElementById("labyrinth9").style.display = "none";
	document.getElementById("lockLaby10").style.display = "none";
	document.getElementById("lockLaby").style.display = "none";
	document.getElementById("labyrinth10").style.display = "block"; 
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
		
		if ( intKeyCode == KEY_UP){
				
			
			plazaPrincipal(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_DOWN){
				
			
			labyrinth9(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
				
	}
	}

	function labyrinth12(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('12.png')";
	document.getElementById("labyrinth13").style.display = "none";
	document.getElementById("labyrinth7").style.display = "none";
	document.getElementById("lockLaby12").style.display = "none";
	document.getElementById("lockLaby").style.display = "none";
	document.getElementById("labyrinth12").style.display = "block"; 
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
		
		if ( intKeyCode == KEY_UP){
				
			
			labyrinth13(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_DOWN){
				
			
			labyrinth7(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
				
	}
	}
	function labyrinth13(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('13.png')";
	document.getElementById("labyrinth14").style.display = "none";
	document.getElementById("labyrinth12").style.display = "none";
	document.getElementById("labyrinth8").style.display = "none";
	document.getElementById("lockLaby13").style.display = "none";
	document.getElementById("lockLaby").style.display = "none";
	document.getElementById("labyrinth13").style.display = "block"; 
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
		
		if ( intKeyCode == KEY_UP){
				
			
			labyrinth14(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_DOWN){
				
			
			labyrinth12(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
		else if ( intKeyCode == KEY_RIGHT){
				
			
			labyrinth8(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
				
	}
	}
	function labyrinth14(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('14.png')";
	document.getElementById("labyrinth13").style.display = "none";
	document.getElementById("lockLaby14").style.display = "none";
	document.getElementById("lockLaby").style.display = "none";
	document.getElementById("labyrinth14").style.display = "block"; 
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
		
		if ( intKeyCode == KEY_DOWN){
				
			
			labyrinth13(); 
			
			
			winObj.keyCode = intKeyCode = REMAP_KEY_T;
			winObj.returnValue = false;
			return false;
		}
				
	}
}