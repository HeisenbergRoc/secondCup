<?php
	header("content-type:text/html;charset=utf-8");
	$username = $_GET["username"];
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		
	}else{
		mysql_select_db("mydb1808",$conn);
		$str = "select *from samsung where username = '$username'";
		$result = mysql_query($str,$conn);
		mysql_close($conn);
		if(mysql_num_rows($result)==0){
			echo "0";
		}else{
			echo "1";
		}
	}
	?>