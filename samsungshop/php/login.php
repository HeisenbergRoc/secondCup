<?php
	header("Content-type:text/html;charset=utf-8");
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];	
	//连接数据库服务器
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
//		die("连接失败".)
	}else{
		mysql_select_db("mydb1808",$conn);
		$str = "select * from samsung where username = '$username' and userpass='$userpass'";
		$result = mysql_query($str,$conn);
		mysql_close($conn);
		if(mysql_num_rows($result)==0){
		 	echo "您的用户名或密码不正确，请重新<a href ='login.html'>登录</a>";	
		 }else{
		 	echo "登录成功<a href ='samsungIndex.html'>点击跳转至首页</a>";
//			echo "location.href = 'samsungIndex.html'";
		 } 
	}
	?>