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
	title : 'NA FLORESTA',
	hasChild : true,
	image : '../iphone/tables/itTips2/1.png',
	text : 'Descubra o valor inestimável do conjunto de rios, ilhas, florestas, cidades e culturas que formam a Amazônia. Os cruzeiros realizados com os iates SeaDream I e SeaDream II proporcionam uma visita única à região ao combinar turismo natural, contemplativo e de aventura a acomodações luxuosas. A partir de fevereiro de 2013, serão diversos roteiros, de sete a 20 dias. No Brasil, estão previstas paradas em pontos estratégicos como Manaus, Parintins, Porto Santana, Anavilhanas, Badajós e Alter do Chão. Algumas jornadas também levam os passageiros a lugares como Iquitos, no Peru, ou Bridgetown, em Barbados.\n\n\n\n',
	url : 'seadream.com',
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
	title : 'MONUMENTAL',
	hasChild : true,
	image : '../iphone/tables/itTips2/2.png',
	text : 'O artista pernambucano Francisco Brennand criou, no bairro da Várzea, no Recife, seu universo próprio. O espaço, conhecido como Oficina de Cerâmica, reúne de maneira permanente seu acervo de esculturas e pinturas. Instalada em 1971 onde antes funcionava a fábrica de telhas e tijolos de seu pai, o espaço abriga um conjunto arquitetônico único. O lugar é dinâmico, pois evoluiu com o trabalho do artista, em produção aos 85 anos. Há diversas estruturas imensas inspiradas em templos, muralhas e fontes, além de um imenso salão de esculturas e a Accademia, que abriga o acervo de pinturas.\n\n\n\n',
	url : 'brennand.com.br',
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
	title : 'PARAÍSO INIGUALÁVEL',
	hasChild : true,
	image : '../iphone/tables/itTips2/3.png',
	text : 'Um fenômeno geológico singular é resultado de milhares de anos de trabalho intenso das forças da natureza. Os Lençóis Maranhenses não carecem de perfeição. A paisagem deslumbrante comporta um conjunto de dunas de até 40 metros de altura e lagoas de água doce em tonalidades variadas, ecossistema costeiro único no bioma da Caatinga. À primeira vista, parece um deserto, mas tem índices pluviais aproximadamente 300 vezes maiores do que a região do Saara. A isso deve sua singularidade. Esses verdadeiros oásis transformam a região em paraíso ideal para um retiro de paz e beleza.\n\n\n\n',
	url : 'turismo.ma.gov.br',
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