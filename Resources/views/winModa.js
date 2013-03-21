Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;

//Criando a janela Rádio
var win = Titanium.UI.currentWindow;

var buttonModa = Ti.UI.createButton({
	// title : 'Moda',
	top : '25%',
	height : '25%',
	width : '64%',
	// font : {
			// fontSize : 30,
			// fontFamily : 'HoeflerText-Italic'
			// fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
			// fontFamily : 'Baskerville-Italic'
	// },
	backgroundImage : '../iphone/buttons/Moda.png'
});

var buttonJoia = Ti.UI.createButton({
	// title : 'Joias',
	top : '64%',
	height : '25%',
	width : '64%',
	// font : {
			// fontSize : 30,
			// fontFamily : 'HoeflerText-Italic'
			// fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
			// fontFamily : 'Baskerville-Italic'
	// },
	backgroundImage : '../iphone/buttons/Joia.png'
});

buttonModa.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : '../tables/Moda.js',
		backgroundColor : '#000',
		navBarHidden : true
	});
	
	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

buttonJoia.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : '../tables/Joia.js',
		backgroundColor : '#000',
		navBarHidden : true
	});
	
	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});


win.add(buttonJoia);
win.add(buttonModa);