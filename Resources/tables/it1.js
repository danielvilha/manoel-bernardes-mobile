var win = Titanium.UI.currentWindow;

win.backgroundColor = '#1F1E1F';

var gradient = {
	type : 'linear',
	startPoint : {
		x : '0%',
		y : '50%'
	},
	endPoint : {
		x : '100%',
		y : '50%'
	},
	colors : [{
		color : '#1E1E1E',
		offset : 0.0
	}, {
		color : '#232323',
		offset : 0.1
	}, {
		color : '#222323',
		offset : 0.85
	}, {
		color : '#383838',
		offset : 1.0
	}],
};

var data = [{
	title : 'QUALIDADE RECONHECIDA',
	hasChild : true,
	image : '../iphone/tables/itTips1/1.png',
	text : 'O restaurante Spondi é referência na Grécia não só por seu ambiente elegante e acolhedor, com deliciosas mesas ao ar livre em meio ao jardim, mas também pela gastronomia criativa e fresca, que reformula pratos típicos da culinária grega. Pratos como o cordeiro, o caranguejo e o bacalhau combinam modernidade e tradição de maneira exótica e são os destaques da casa. Localizado no Pagrati, tradicional distrito histórico de Atenas, o restaurante é membro dos prestigiados Relais & Chateaux e Grandes Tables du Monde, e é eleito há 12 anos o melhor restaurante da Grécia pelo Golden Chef`s Hat Award da Athinorama, além de ter duas estrelas no famoso Guia Michelin.\n\n\n\n',
	url : 'spondi.gr',
	backgroundGradient : gradient,
	font : {
		fontSize : 20,
		// fontFamily : 'HoeflerText-Italic'
		fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
		// fontFamily : 'Baskerville-Italic'
		// fontFamily : 'HelveticaNeue-UltraLight'
	},
	color : '#FFFF'
}, {
	title : 'JUST RIDE',
	hasChild : true,
	image : '../iphone/tables/itTips1/2.png',
	text : 'Ver pela primeira vez os pontos turísticos seculares de Atenas é inesquecível, mas para quem já os conhece e está em busca de uma nova perspectiva da cidade grega os tours da Athens by Bike são perfeitos. Com diversas opções de roteiros que passam por lugares como o Museu Arqueológico de Karameikos, o Teatro de Dionísio e o Observatório de Atenas, o passeio de bicicleta proporciona uma visão inusitada e belíssima da cidade. Os guias apresentam as melhores dicas e vistas de Atenas pelas suas ruas tranquilas e de pouco movimento, que possibilitam que o turista relaxe e aproveite o passeio.\n\n\n\n',
	url : 'athensbybike.com',
	backgroundGradient : gradient,
	font : {
		fontSize : 20,
		// fontFamily : 'HoeflerText-Italic'
		fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
		// fontFamily : 'Baskerville-Italic'
		// fontFamily : 'HelveticaNeue-UltraLight'
	},
	color : '#FFFF'
}, {
	title : 'PARADA OBRIGATÓRIA',
	hasChild : true,
	image : '../iphone/tables/itTips1/3.png',
	text : 'Localizado na área histórica de Makrygianni e desenvolvido pelo escritório Bernard Tschumi Architects (NY/Paris), o moderno Acropolis Museum é parada obrigatória durante a visita à cidade. Com cerca de 150 mil metros quadrados e três andares que prezam pela iluminação natural, o museu recebe 10 mil visitantes por dia e conta a história completa da Acropolis de Atenas e seus arredores. O último andar oferece uma incrível vista panorâmica de 360 graus da cidade, o local  ainda possui um auditório com 200 lugares e até ruínas dos séculos 4 a 7 a.C intactas e protegidas embaixo do edifício, visíveis através do primeiro andar.\n\n\n\n',
	url : 'theacropolismuseum.gr',
	backgroundGradient : gradient,
	font : {
		fontSize : 20,
		// fontFamily : 'HoeflerText-Italic'
		fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
		// fontFamily : 'Baskerville-Italic'
		// fontFamily : 'HelveticaNeue-UltraLight'
	},
	color : '#FFFF'
}];

var tableview = Titanium.UI.createTableView({
	data : data,
	backgroundColor : '#1F1E1F',
	top : -20,
	left : -6,
	right : -6,
	style : Titanium.UI.iPhone.TableViewStyle.GROUPED
});

tableview.addEventListener('click', function(e) {

	var win = Titanium.UI.createWindow({
		title : e.rowData.title,
		font : {
			fontSize : 20,
			// fontFamily : 'HoeflerText-Italic'
			fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
			// fontFamily : 'Baskerville-Italic'
			// fontFamily : 'HelveticaNeue-UltraLight'
		},
		backgroundColor : '#1F1E1F',
		barColor : '#111'
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});

	var scrollView = Titanium.UI.createScrollView({
		contentWidth : 'auto',
		contentHeight : 'auto',
		top : 0,
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : true
	});

	var imageView = Titanium.UI.createImageView({
		backgroundImage : e.rowData.image,
		width : '100%',
		height : 195,
		top : 0
	});

	scrollView.add(imageView);

	var label = Ti.UI.createLabel({
		horizontalWrap : true,
		text : e.rowData.text,
		font : {
			fontSize : 18,
			//fontFamily : 'HoeflerText-Italic'
			//fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
			//fontFamily : 'Baskerville-Italic'
			fontFamily : 'HelveticaNeue-UltraLight'
		},
		top : 205,
		color : '#ffff',
		height : 'auto',
		width : 300,
		textAlign : 'left'
	});

	scrollView.add(label);

	var urlButton = Ti.UI.createButton({
		title : e.rowData.url,
		height : 35,
		backgroundImage : '../iphone/buttons/webLink.png',
		width : '90%',
		zIndex : 9,
		bottom : 15
	});

	urlButton.addEventListener('click', function() {
		var winWeb = Titanium.UI.createWindow({
			barColor : '#111',
			height : 'auto',
			width : 'auto'
		});

		var webView = Titanium.UI.createWebView({
			url : 'http://' + e.rowData.url
		});

		winWeb.add(webView);

		Titanium.UI.currentTab.open(winWeb, {
			animated : true
		});
	});

	scrollView.add(urlButton);

	win.add(scrollView);

});

Titanium.UI.currentWindow.add(tableview);