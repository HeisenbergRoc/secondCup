	
 	//点击添加物品到购物车

function addshoppingCar(){
	$(".addCars").each(function(i){
		$(".addCars").eq(i).click(function(){
			let obj = {
				"goodsname":$(this).parent().children()[0].innerHTML,
				"goodsimg":$(this).parent().parent().children(0).children(0)[1],
				"goodsprice":$(this).parent().children()[1],
				"goodsnumber":1
			}
			let htmlStr = JSON.stringify(obj);
			console.log(htmlStr);
			let xhr = new XMLHttpRequest();
			xhr.open("POST","shopCar.php?obj="+str,"true");
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && xhr.status ==200){
					addTocar(xhr.responseText);
				}
			}
			xhr.send();
		}
	})
	//添加点击添加物品
}


 $(".jiaru").each(function(i){
      $(".jiaru").eq(i).click(function(){
          let obj={
              "name":$(this).parent().children(0).children(1)[1].innerHTML,
              "danjia":parseFloat($(this).parent().children(0).children(1)[2].firstElementChild.innerHTML),
              "shuliang":1,
              "img":$(this).parent().children(0)[0].firstElementChild.src
          }
           let str=JSON.stringify(obj);
            // console.log(str);
            let ajx = new XMLHttpRequest();
            ajx.open("get","php/gouwu.php?obj="+str,"true");
            ajx.onreadystatechange=function(){ 
               if(ajx.readyState==4&&ajx.status==200){
                    console.log(ajx.responseText);
                    getgouwu(ajx.responseText);
               }
            }
            ajx.send();
       })
   });