function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	
	
//导航栏轮播图
	let currentIndex = 0;
	var myTimer = null;
	//自动播放
	function autoPlay(){
		if(myTimer = null){
			return;
		}
		myTimer = setInterval(function(){
			let outIndex = currentIndex;
			currentIndex++;
			if(currentIndex<0 || currentIndex>5){
				currentIndex = 0;
			}
			showImg(outIndex,currentIndex);
		},2000)
	}	
	//暂停播放动画
	function stop(){
		if(myTimer != null){
			window.clearInterval(myTimer);
			myTimer = null;
		}
	}
	function showImg(outIndex,inIndex){
		let imgs = $("#carouselBox").children;
		imgs[inIndex].style.left = "1440px";
		linearMove03(imgs[inIndex],"left",1440,0,500);
		linearMove03(imgs[outIndex],"left",0,-1440,500);
		let liDom = $("#carouselBox").lastElementChild.children;
		for(let i=0;i<liDom.length;i++){
			liDom[i].style.backgroundColor = "white";
		}
		liDom[currentIndex].style.backgroundColor = "blue";
	}
	
	function goImg(transIndex){
		let outIndex = currentIndex;
		currentIndex = transIndex;
		if(currentIndex<0 || currentIndex>5){
				currentIndex = 0;
			}
		showImg(outIndex,currentIndex);
	}
	
	
function carousel(){
	autoPlay();
	$("#carouselBox").onmouseover = stop;
	$("#carouselBox").onmouseout = autoPlay;
	let liDom = $("#carouselBox").lastElementChild.children;
	for(let i=0;i<liDom.length;i++){
		liDom[i].setAttribute("index",i);
		liDom[i].onclick = function(){
			goImg(this.getAttribute("index"))
		}
	}	
}

//中间栏轮播图
function secondCarousel(){	
	function carousels(){
		autoPlay();
		$("#activeCarousel").onmouseover = stop;
		$("#activeCarousel").onmouseout = autoPlays;
		let liDom = $("#activeCarousel").lastElementChild.children;
			for(let i=0;i<liDom.length;i++){
				liDom[i].setAttribute("index",i);
				liDom[i].onclick = function(){
					goImg(this.getAttribute("index"))
				}
			}	
	}
	let currentIndex = 0;
	var myTimer = null;
	function autoPlay(){
		if(myTimer = null){
			return;
		}
		myTimer = setInterval(function(){
			let outIndex = currentIndex;
			currentIndex++;
			if(currentIndex<0 || currentIndex>1){
				currentIndex = 0;
			}
			showImg(outIndex,currentIndex);
		},2000)
	}
	function stop(){
		if(myTimer != null){
			window.clearInterval(myTimer);
			myTimer = null;
		}
	}
	function goImg(transIndex){
		let outIndex = currentIndex;
		currentIndex = transIndex;
		if(currentIndex<0 || currentIndex>1){
				currentIndexs = 0;
			}
		showImg(outIndex,currentIndex);
	}
	function showImg(outIndex,inIndex){
		let imgs = $("#activeCarousel").children;
		imgs[inIndex].style.left = "1220px";
		linearMove03(imgs[inIndex],"left",1220,0,500);
		//让outIndex滑出
		linearMove03(imgs[outIndex],"left",0,-1220,500);
		//修改li的样式
		let liDom = $("#activeCarousel").lastElementChild.children;
		for(let i=0;i<liDom.length;i++){
			liDom[i].style.backgroundColor = "white";
		}
		liDom[currentIndex].style.backgroundColor = "blue";
	}
}
//面向对象的轮播图	
//分析轮播图中的类
/*function activeCarousel(){
	let count = 0;
	setInterval(function(){
		let num = count;
		if(count>$("img").length-1){
			count = 0;
		}
		//循环所有的图片
		$(".activeCarousel img").each(function(){
			$(".activeCarousel img").css("display","none");
		})
		$(".activeCarousel img").eq(num).fadeOut("fast","swing");
		$(".activeCarousel img").eq(count).fadeIn("fast","swing");
	},1000)
}*/
/*
function carousels(boxDom,width,height,imgs,btnColor,bthHightColor,btnSize,isCircle,timeSpace){
//	this.domObj = null;
	this.boxDom = boxDom;
	this.width = width;
	this.height = height;
	this.imgs = imgs;
	this.btnColor = btnColor; 
	this.btnHighColor = btnHighColor;
	this.btnSize = btnSize;
	this.isCircle = isCircle;	
	this.currIndex = 0;
	this.timeSpace = timeSpace;
	this.myTimer = null;
	this.createUI = function(){
		this.boxDom.style.overflow = "hidden";
		for(let i=0;i<this.imgs.length;i++){
			let imgDom = document.createElement("img");
			imgDom.src = this.imgs[i];
			imgDom.style.cssText = "position:absolute";
			if(i==0){
				imgDom.style.left = "0px";
			}else{
				imgDom.style.left = this.width+"px";
			}
			imgDom.style.width = this.width+"px";			
			imgDom.style.height = this.height+"px";
			this.boxDom.appendChild(imgDom);
		}
		let ulDom = document.createElement('ul');
		ulDom.style.cssText = "position:absolute;list-style:none;z-index:2;";
		this.boxDom.appendChild(ulDom);
		for(let i=0;i<this.imgs.length;i++){
			let liDom = document.createElement('li');
			liDom.style.cssText = "float:left";
			liDom.style.width = this.btnSize+'px';
			liDom.style.height = this.btnSize+'px';
			if(this.isCircle){			
			liDom.style.borderRadius = "50%";
			}
		if(i==0){
			liDom.style.backgroundColor = this.btnHighColor;
		}else{
			liDom.style.backgroundColor = this.btnColor;
		}
		ulDom.appendChild(liDom);
	}
}
	//添加事件
	this.addEvent =function(){
		let temp = this;
		this.boxDom.onmouseover = function(){
			temp.stop();
		}
		this.boxDom.onmouseout = function(){
			temp.autoPlay();
		};
		let lis = this.boxDom.lastElementChild.children;
		for(var i=0;i<lis.length;i++){
			lis[i].setAttribute("index",i);//这句话是给每个li增加了一个index属性，值是下标。
			lis[i].onclick = function(){
				that.goImg(parseInt(this.getAttribute("index")));
			};
		}
	}
this.autoPlays = function(){
	if(this.myTimer != null){
		return;
	}
	this.myTimer = setInterval(()=>{
		let outIndex = this.currentIndex;
		this.currentIndex = this.currentIndex +1;
		if(this.currentIndex>this.imgs.length-1 || this.currentIndex<0){
			this.currentIndex = 0;
		}
		this.showImgs(outIndex,this.currentIndex);
	},this.timeSpace);
}
	
	this.stop = function{
		if(this.myTimer !=null ){
			window.clearInterval(this.myTimer);
			this.myTimer = null;
		}
	}
	
	this.goImgs = function(transIndex){
		let outIndex = this.currentIndex;
		this.currentIndex = transIndex;
		if(this.currentIndex>this.imgs.length-1 || this.currentInde<0){
			this.currentIndex = 0
		}
		this.showImgs(outIndex,this.currentIndex);
	}
	this.showImgs = function(outIndex,inIndex){
		let imgs = this.boxDom.children;
		imgs[inIndex].style.left = this.width +'px';
		linearMove03(imgs[inIndex],"left",this.width,0,300);
		linearMove03(imgs[inIndex],"left",0,-1*this.width,300);	
		let lis = this.boxDom.lastElementChild.children;
		for(let i = 0;i<lis.length;i++){
			lis[i].style.backgroundColor = this.btnColor;
		}
		lis[this.currentIndex].style.backgroundColor = this.btnHighColor;
	}
	this.createUI();
	this.addEvent();
}

	let s1 = new carousels(
		$('.activeCarousel'),
		1220,
		184,
		["img/active01.jpg","img/active02.jpg"],
		"white",
		"blue",
		10,
		true,
		1000
	);
	s1.autoPlays();*/

//固定导航栏
function fixedTour(){
	let angry = $("#indexBox");
	let top1 = angry.offsetTop;
	let left = angry.offsetLeft;
	document.onscroll = function(){
		let temp = document.documentElement.scrollTop || document.body.scrollTop;
		if(temp > top1){
			angry.style.position = "fixed";
			angry.style.left = left+"px";
		}else{
			angry.style.position = "static";
		}
	}
}
//回到顶部
function toTop(){
	$("#toTop").onclick = function(){
		let temp = document.documentElement.scrollTop;	
		reback();
		function reback(){
			if(temp>0){
				temp -=100;
				document.documentElement.scrollTop = temp;
				setInterval(reback,100);
			}
		}
	}
}

//从cookie中获取登录的账号显示到登录界面
function showName(){	
	let temp = getCookie("username");
	$("#bottolBox").innerHTML = temp;
	$("#bottolBox").previousElementSibling.style = "none"
}

//点击出现搜索框
function addsearch(){
//	let btns = $()
	$("#showSearch").onclick = function(){
		$(".searchBtn").style.display="block";
	}
}


 
