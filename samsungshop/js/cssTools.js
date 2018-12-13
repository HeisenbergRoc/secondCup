
//功能：获取某个DOM元素的样式属性的兼容性写法
//参数：dom元素，样式属性名
//返回值：样式属性的值

function getStyle(domObj,attr){
	if(domObj.currentStyle){
		return domObj.currentStyle[attr];
	}else{
		return window.getComputedStyle(domObj)[attr];
	}	
}
