function treasure(){
	document.getElementsByTagName("body")[0].style.backgroundImage = "none";
	document.getElementsByTagName("body")[0].style.backgroundColor = "white";
	document.getElementById("temploTresVentanas").style.display = "none";
	document.getElementById("treasure").style.display = "block"; 
}
var test=0;
var count=0;  
function dragstart_handler(ev) {
 console.log("dragStart");
 // Change the source element's background color to signify drag has started
 //ev.currentTarget.style.border = "dashed";
 // Add the id of the drag source element to the drag data payload so
 // it is available when the drop event is fired
 ev.currentTarget.style.height = "220px"; 
 ev.dataTransfer.setData("text", ev.target.id);
 // Tell the browser both copy and move are possible
 ev.effectAllowed = "copyMove";
}
function dragover_handler(ev) {
 console.log("dragOver");
 // Change the target element's border to signify a drag over event
 // has occurred
 ev.currentTarget.style.background = "transparent";
 
 ev.preventDefault();
}
function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  // Get the id of drag source element (that was added to the drag data
  // payload by the dragstart event handler)
  var id = ev.dataTransfer.getData("text");
  // Only Move the element if the source and destination ids are both "move"
  if (oneDone==1 && id == "totem1_copy" && ev.target.id == "totem1_move") {
	test=1; 
   var nodeCopy = document.getElementById(id).cloneNode(true);
   nodeCopy.id = "newId";
   ev.target.appendChild(nodeCopy);
  }
  if (twoDone==1 && id == "totem2_copy" && ev.target.id == "totem2_move") {
	test=1; 
   var nodeCopy = document.getElementById(id).cloneNode(true);
   nodeCopy.id = "newId";
   ev.target.appendChild(nodeCopy);
  }
  if (threeDone==1 && id == "totem3_copy" && ev.target.id == "totem3_move") { 
  test=1; 
   var nodeCopy = document.getElementById(id).cloneNode(true);
   nodeCopy.id = "newId";
   ev.target.appendChild(nodeCopy);
  }
}
function dragend_handler(ev) {

	if(oneDone==1 && test==1){
	 ev.currentTarget.style.backgroundImage = "url('white.png')";
	 test=0; 
	 count++; 
	} 
	if(twoDone==1 && test==1){
	 ev.currentTarget.style.backgroundImage = "url('white.png')";
	 test=0; 
	 count++; 
	} 
	if(threeDone==1 && test==1){
	 ev.currentTarget.style.backgroundImage = "url('white.png')";
	 test=0; 
	 count++; 
	} 
	if(count==3)
	{
		victory(); 
	}
	console.log("dragEnd");
	// Restore source's border
}
