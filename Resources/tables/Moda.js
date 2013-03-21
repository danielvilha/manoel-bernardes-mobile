Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;

//Criando a janela Rádio
var win = Titanium.UI.currentWindow;

var vwModa1 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/MODA/1_2.png',
	width : '200%',
	left : 0
});

vwModa1.addEventListener('dblclick', function(e) {
	win.close();
});

var vwModa2 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/MODA/1_2.png',
	width : '200%',
	right : 0
});

var vwModa3 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/MODA/3.png'
});

var vwModa4 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/MODA/4.png'
});

var vwModa5 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/MODA/5.png'
});

var vwModa6 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/MODA/6.png'
});

var vwModa7 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/MODA/7_8.png',
	width : '200%',
	left : 0
});

var vwModa8 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/MODA/7_8.png',
	width : '200%',
	right : 0
});

var vwModa9 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/MODA/9.png'
});

var vwModa10 = Ti.UI.createView({
	backgroundImage : '../iphone/moda/MODA/10.png'
});

var scrollableView = Ti.UI.createScrollableView({
	views : [vwModa1, vwModa2, vwModa3, vwModa4, vwModa5, vwModa6, vwModa7, vwModa8, vwModa9, vwModa10],
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