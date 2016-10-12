
<?php
	session_start();	
?>

<?php
	header("Content-Type:text/html; charset=utf-8");
	
	if($_POST["v"]==$_SESSION["username"] && $_POST["p"]==$_SESSION["pwd"]){
		echo "1";
	}
	else if($_POST["v"]==$_SESSION["username"]&& $_POST["p"]!=$_SESSION["pwd"]){
		echo "10";
	}
	else{
		echo '0';
	}
?>