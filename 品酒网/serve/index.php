
<?php
	session_start();
?>

<?php
	header("Content-Type:text/html; charset=utf-8");
	$uname = $_POST["uvalue"];
	$pwd= $_POST["pwd"];
	$_SESSION["username"]=$uname;
	$_SESSION["pwd"]=$pwd;
	if($uname=="11111111111"){
		echo "0";
	}
	else{
		echo "1";
	}
?>