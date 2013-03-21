Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;

//Criando a janela Rádio
var win = Titanium.UI.currentWindow;

var vwJoia1 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/JOIAS/1_2.png',
	width : '200%',
	left : 0
});

vwJoia1.addEventListener('dblclick', function(e) {
	win.close();
});

var vwJoia2 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/JOIAS/1_2.png',
	width : '200%',
	right : 0
});

var vwJoia3 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/JOIAS/3.png'
});

var vwJoia4 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/JOIAS/4.png'
});

var vwJoia5 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/JOIAS/5.png'
});

var vwJoia6 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/JOIAS/6.png'
});

var vwJoia7 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/JOIAS/7.png'
});

var vwJoia8 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/JOIAS/8.png'
});

var vwJoia9 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/JOIAS/9.png'
});

var vwJoia10 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/JOIAS/10.png'
});



var scrollableView = Ti.UI.createScrollableView({
	views : [vwJoia1, vwJoia2, vwJoia3, vwJoia4, vwJoia5, vwJoia6, vwJoia7, vwJoia8, vwJoia9, vwJoia10],
	touchEnabled : true,
	currentPage : 0,
	zIndex : 9
});

var scrollView = Titanium.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	bottom : 0,
	backgroundColor : '#1F1E1F',
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
	maxZoomScale : 3.0,
	minZoomScale : 1.0
});

scrollView.addEventListener('dblclick', function(e) {
	scrollView.zoomScale = 1.0;
});

scrollView.add(scrollableView);

win.add(scrollView);