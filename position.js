/**
 * 智能取数模块  获取页面元素位置的javascript函数
 * lix 20140901
 * li5x@sina.com
 */

/**
 * 获取元素的左上角x
 * 调用的时候传入 selector = $("#targetId") 
 */
function getElementX1(selector) {
	var x1 = selector.offset().left;
	return x1;
}

/**
 * 获取元素的左上角y
 */
function getElementY1(selector) {
	var y1 = selector.offset().top;
	return y1;
}

/**
 * 获取元素的右上角x
 */
function getElementX2(selector) {
	var x2 = selector.offset().left + selector.width();
	return x2;
}

/**
 * 获取元素的右上角y
 */
function getElementY2(selector) {
	var y2 = selector.offset().top;
	return y2;
}

/**
 * 获取元素的右下角x
 */
function getElementX3(selector) {
	var x3 = selector.offset().left
	selector.width();
	return x3;
}

/**
 * 获取元素的右下角y
 */
function getElementY3(selector) {
	var y3 = selector.offset().top + selector.height();
	return y3;
}

/**
 * 获取元素的左下角x
 */
function getElementX4(selector) {
	var x4 = selector.offset().left;
	return x4;
}

/**
 * 获取元素的左下角y
 */
function getElementY4(selector) {
	var y4 = selector.offset().top + selector.height();
	return y4;
}

/**
 * 获取元素的宽度
 */
function getElementWidth(selector) {
	var width = selector.width();
	return width;
}

/**
 * 获取元素的高度
 */
function getElementHeight(selector) {
	var height = selector.height();
	return height;
}

/**
 * 获取元素的坐标数组  依次返回 x1 y1 x2 y2 x3 y3 x4 y4 width height
 * @param selector
 *  var p = getElementPositionArray(selector) ;
 *  alert("  x1:"+p[0]+"  y1:"+p[1]+"  x2:"+p[2]+"  y2:"+p[3]+"  x3:"+p[4]+"  y3:"+p[5]+"  x4:"+p[6]+"  y4:"+p[7]+" width:"+p[8]+"  height:"+p[9]) ;
 */
function getElementPositionArray(selector){
	var array = new Array() ;
	
	array[0] = selector.offset().left ; //x1
	array[1] = selector.offset().top; //y1
	array[2] = selector.offset().left+selector.width(); //x2
	array[3] = selector.offset().top; //y2
	array[4] = selector.offset().left+selector.width(); //x3
	array[5] = selector.offset().top+selector.height(); //y3
	array[6] = selector.offset().left;//x4
	array[7] = selector.offset().top+selector.height();//y4
	array[8] = selector.width() ; //width
	array[9] = selector.height() ; //height
	
	return array ;
}

/**
 * 获取元素的坐标
 * 左上角--右上角--右下角--左下角--左边框中点--右边框中点--上边框中点--下边框中点
 * (x1,y1)--(x2,y2)--(x3,y3)--(x4,y4)--(xcl,ycl)--(xcr,ycr)--(xct,yct)--(xcb,ycb) 
 * @param selector
 * p = getElementPosition(selector) ;
 * alert("  x1:"+p.x1+"  y1:"+p.y1+"  x2:"+p.x2+"  y2:"+p.y2+"  x3:"+p.x3+"  y3:"+p.y3+"  x4:"+p.x4+"  y4:"+p.y4+"  width:"+p.width+" height:"+p.height+" xcl:"+p.xcl+"  xcr:"+p.xcr+"  ycl:"+p.ycl+"  ycr:"+p.ycr) ;
 */
function getElementPosition(selector){
	return{
		x1:selector.offset().left ,
		y1:selector.offset().top,
		x2:selector.offset().left+selector.width(),
		y2:selector.offset().top,
		x3:selector.offset().left+selector.width(),
		y3:selector.offset().top+selector.height(),
		x4:selector.offset().left,
		y4:selector.offset().top+selector.height(),
		width:selector.width(),
		height:selector.height(),
		xcl:selector.offset().left,//左中部x
		xcr:selector.offset().left+selector.width(),//左中部y
		ycl:selector.offset().top+selector.height()/2,//右中部x
		ycr:selector.offset().top+selector.height()/2, //右中部y
		xct:selector.offset().left+selector.width()/2,//上中x
		yct:selector.offset().top ,//上中y
		xcb:selector.offset().left+selector.width()/2 ,//下中x
		ycb:selector.offset()+selector.height //下中y
	};
}

/**
 * 判断坐标为(x,y)的点是否在选中元素内部点
 * @param selector
 * @param x
 * @param y
 */
function innertPonit(selector,x,y){
	 var p = this.getElementPosition(selector) ;
	 return x >= p.x1 && x <= p.x2 && y >= p.y1 && y <= p.y4 ; 
}

/**
 * 获取鼠标坐标
 * @param e
 */
function mousePosition(){
    var e = window.event ;
	return {
		x: e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,
		y: e.clientY+document.body.scrollTop+document.documentElement.scrollTop
	}
}



