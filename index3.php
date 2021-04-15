<?php 
	@session_start(); 
	include("C:/wamp/www/game/config.php"); 
?>

<html>
	<?php
		$result = mysqli_query ("select firstname from name") or exit("The query could not be performed");   
	?>

	<?php
		$i = 0; 
		while ($lign = mysql_fetch_array($result)) 
		{
			$i = $i +1; 
		}
	?>
	<?php
		echo $lign['firstname']; 
	?>
</html>