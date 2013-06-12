Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;

//Criando a janela Rádio
var win = Titanium.UI.currentWindow;

var viewModa = Ti.UI.createView({
	backgroundImage : '../images/Vitrine.jpg'
});

var buttonFlip = Ti.UI.createButton({
	backgroundImage : '../images/button/but_More.png',
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
		text : 'Delicados Arranjos',
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
		text : 'Ouro, diamantes e pedras preciosas podem se transformar em surpresas inesquecíveis quando flores e folhas formam românticos buquês, revelando um jeito feminino de ser.',
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
		backgroundImage : '../images/button/but_Less.png',
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