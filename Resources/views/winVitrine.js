Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;

//Criando a janela Rádio
var win = Titanium.UI.currentWindow;

var viewModa = Ti.UI.createView({
	backgroundImage : '../iphone/vitrine/1.png'
});

var buttonFlip = Ti.UI.createButton({
	backgroundImage : '../iphone/buttons/More.png',
	bottom : 30,
	right : 30,
	height : 30,
	width : 30
});

buttonFlip.addEventListener('click', function() {
	var win = Titanium.UI.createWindow ({
		backgroundColor : '#1F1E1F',
		tabBarHidden : false
	});
	
	var view = Titanium.UI.createView({
		backgroundColor : '#1F1E1F'
	});

	var labelTitle = Ti.UI.createLabel({
		text : 'Poesia, identidade e raízes',
		font : {
			fontSize : 22,
			// fontFamily : 'HoeflerText-Italic'
			fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
			// fontFamily : 'Baskerville-Italic'
			// fontFamily  : 'HelveticaNeue-UltraLight'
		},
		top : 115,
		color : '#ffff',
		height : 'auto',
		width : 300,
		textAlign : 'left'
	});

	view.add(labelTitle);

	var label = Ti.UI.createLabel({
		text : 'A prosa poética de João Guimarães Rosa (1908-1967), seus sertões e veredas, foram a inspiração para essa linha especial. Os desenhos da coleção fazem referência direta ao universo revelado pelo escritor, expressando a tradição dos vaqueiros, dos encourados, aliados a linhas femininas delicadas.',
		font : {
			fontSize : 16,
			// fontFamily : 'HoeflerText-Italic'
			// fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
			// fontFamily : 'Baskerville-Italic'
			fontFamily : 'HelveticaNeue-UltraLight'
		},
		top : 170,
		color : '#ffff',
		height : 'auto',
		width : 300,
		textAlign : 'left'
	});

	view.add(label);

	var buttonFlip = Ti.UI.createButton({
		backgroundImage : '../iphone/buttons/Less.png',
		bottom : 78,
		right : 30,
		height : 30,
		width : 30
	});

	buttonFlip.addEventListener('click', function() {
		win.close();
	});
	
	win.add(view);
	win.add(buttonFlip);
	
	win.open({
		navBarHidden : true,
		modal : true,
		modalTransitionStyle : Titanium.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL,
		modalStyle : Ti.UI.iPhone.MODAL_PRESENTATION_CURRENT_CONTEXT
	});
});

viewModa.add(buttonFlip);

win.add(viewModa);