Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;

//Criando a Tab It Tips
var win = Titanium.UI.currentWindow;
win.title = 'It Tips';

var buttonBAR = Ti.UI.createButton({
	title : 'Atenas',
	font : {
		fontSize : 26,
		// fontFamily : 'HoeflerText-Italic'
		fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
		// fontFamily : 'Baskerville-Italic'
		// fontFamily : 'HelveticaNeue-UltraLight'
	},
	top : '25%',
	height : 45,
	width : '64%',
	backgroundImage : '../iphone/buttons/but_it1.png'
});

buttonBAR.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : '../tables/it1.js',
		title : 'Atenas',
		backgroundColor : '#fff',
		navBarHidden : false,
		barColor : '#111'
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

win.add(buttonBAR);
//---------------------------------------------------------------------------------------------------------

var buttonBRA = Ti.UI.createButton({
	title : 'Brasil',
	font : {
		fontSize : 26,
		// fontFamily : 'HoeflerText-Italic'
		fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
		// fontFamily : 'Baskerville-Italic'
		// fontFamily : 'HelveticaNeue-UltraLight'
	},
	top : '42%',
	height : 45,
	width : '64%',
	backgroundImage : '../iphone/buttons/but_it2.png'
});

buttonBRA.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : '../tables/it2.js',
		title : 'Brasil',
		backgroundColor : '#fff',
		navBarHidden : false,
		barColor : '#111'
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

win.add(buttonBRA);
//---------------------------------------------------------------------------------------------------------

var buttonNY = Ti.UI.createButton({
	title : 'Istambul',
	font : {
		fontSize : 26,
		// fontFamily : 'HoeflerText-Italic'
		fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
		// fontFamily : 'Baskerville-Italic'
		// fontFamily : 'HelveticaNeue-UltraLight'
	},
	top : '59%',
	height : 45,
	width : '64%',
	backgroundImage : '../iphone/buttons/but_it3.png'
});

buttonNY.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : '../tables/it3.js',
		title : 'Istambul',
		backgroundColor : '#fff',
		navBarHidden : false,
		barColor : '#111'
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

win.add(buttonNY);
//---------------------------------------------------------------------------------------------------------

var buttonTO = Ti.UI.createButton({
	title : 'Pequim',
	font : {
		fontSize : 26,
		// fontFamily : 'HoeflerText-Italic'
		fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
		// fontFamily : 'Baskerville-Italic'
		// fontFamily : 'HelveticaNeue-UltraLight'
	},
	top : '76%',
	height : 45,
	width : '64%',
	backgroundImage : '../iphone/buttons/but_it4.png'
});

buttonTO.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : '../tables/it4.js',
		title : 'Pequim',
		backgroundColor : '#fff',
		navBarHidden : false,
		barColor : '#111'
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

win.add(buttonTO);
//---------------------------------------------------------------------------------------------------------