<?php
	header("Content-type:text/html;charset=utf-8");
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];	
	//连接数据库服务器
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
//		die("连接失败")
	}else{
		mysql_select_db("mydb1808",$conn);
		$str = "insert into samsung(username,userpass) values('$username','$userpass')";
		$result = mysql_query($str,$conn);
		mysql_close($conn);
//		mysql_num_rows($result)==0;
		if($result == 1){
			echo("注册成功,请<a href='login.html'>登录</a>");
		}else{
			echo "注册失败,请重新<a href='reg.html'>注册</a>";
		}
	}	
?>