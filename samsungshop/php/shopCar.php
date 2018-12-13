<?php
	header("Content-type:html/text;charset=utf-8");
	$goodsname = $POST_['goodsname'];
	$goodsimg = $POST_['goodsimg'];
	$goodsprice = $POST_['goodsprice'];
	$goodsnumber = $POST_['goodsnumber'];
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		
	}else{
		mysql_connect("mydb1808",$conn);
		$str = "insert into shoppingCar(goodsname,goodsimg,goodsprice,goodsnumber) values('$goodsname','$goodsimg','$goodsprice','$goodsnumber')";
		$result = mysql_query($str,$conn) ;
		mysql_close("$conn");
		if($result==1){
			echo "已成功加入购物车";
		}else{
			echo "添加失败";
		}
	}

	?>