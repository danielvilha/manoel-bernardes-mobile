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
	title : 'GIGANTE MILENAR',
	hasChild : true,
	image : '../iphone/tables/itTips4/1.png',
	text : 'A Grande Muralha é a mais conhecida e disputada atração da China. O trecho Badaling (um dos quatro acessíveis aos turistas) é o mais próximo à capital e fica a cerca de uma hora e meia de Pequim. Os mais de 5.300 quilômetros da muralha percorrem o Golfo de Bohai até a província de Gansu e foram construídos em etapas, entre os anos 5 a.C. e 16 d.C. A extensa e impressionante muralha atravessa campos, desertos e montanhas. A vista do trecho Badaling, em particular, permite o incrível contraste do monumento milenar com as modernas rodovias chinesas.\n\n\n\n',
	// url : 'companhiadasletras.com.br',
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
	title : 'SUMMER TIME',
	hasChild : true,
	image : '../iphone/tables/itTips4/2.png',
	text : 'Yiheyuan significa “Palácio da Harmonia Cultivada”, mas o ponto histórico é conhecido pelos turistas como Palácio de Verão. Com uma área de quase três quilômetros quadrados, sendo 75% só de água, o imponente palácio impressiona por sua extensão, beleza e riqueza de detalhes. Visita obrigatória para quem passa por Pequim. O início de sua construção foi em 1750, durante o reinado do imperador Qianlong. Em 1998, os inúmeros jardins, estruturas e lagos que fazem parte do Palácio de Verão foram incluídos pela Unesco em sua lista de Patrimônios Mundiais da Humanidade.\n\n\n\n',
	// url : 'tsukiji-market.or.jp',
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
	title : 'SILK SECTION',
	hasChild : true,
	image : '../iphone/tables/itTips4/3.png',
	text : 'Muitas lendas rondam a origem da seda. O que se sabe, entretanto, é que a China se traduz no berço da sericicultura e, durante muito tempo, a extraordinária técnica de trabalhar esse nobre tecido foi proibida de ser ensinada para forasteiros. Dizem que Leizu, a mulher do primeiro imperador da China, Huangdi, no século 17 a.C., descobriu que se podia extrair fios maleáveis do casulo do bicho-da-seda. Cinco mil anos depois, o tecido pode ser encontrado nos mais modernos mercados da China. Em Pequim, há vários museus dedicados a preservar e contar a história dessa arte milenar, em que mulheres se dedicam ao trabalho minucioso que envolve a produção da seda enquanto são observadas por turistas do mundo todo.\n\n\n\n',
	// url : '2121designsight.jp',
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

	// var urlButton = Ti.UI.createButton({
		// title : e.rowData.url,
		// height : 35,
		// backgroundImage : '../iphone/buttons/webLink.png',
		// width : '90%',
		// zIndex : 9,
		// bottom : 15
	// });

	// urlButton.addEventListener('click', function() {
		// var winWeb = Titanium.UI.createWindow({
			// barColor : '#111',
			// height : 'auto',
			// width : 'auto'
		// });

		// var webView = Titanium.UI.createWebView({
			// url : 'http://' + e.rowData.url
		// });

		// winWeb.add(webView);

		// Titanium.UI.currentTab.open(winWeb, {
			// animated : true
		// });
	// });

	// scrollView.add(urlButton);

	win.add(scrollView);

});

Titanium.UI.currentWindow.add(tableview);