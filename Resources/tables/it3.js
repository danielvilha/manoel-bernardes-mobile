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
	title : 'BEAUTIFUL JOURNEY',
	hasChild : true,
	image : '../iphone/tables/itTips3/1.png',
	text : 'A Venice Simplon Orient Express é uma empresa centenária especializada em viagens de trem que unem o glamour e o luxo dos anos 20 ao conforto e segurança fundamentais dos dias de hoje. Um dos itinerários disponíveis é a inesquecível viagem de Paris a Istambul, na qual os passageiros ficam acomodados em autênticos vagões vintage e podem apreciar uma paisagem de tirar o fôlego. Um pianista completa a atmosfera do bar, enquanto pratos gourmet elaborados por chefs franceses são servidos no restaurante. Já as luxuosas e confortáveis cabines individuais são belamente decoradas com mogno e motivos florais e dispõem de lavatório original.\n\n\n\n',
	url : 'orient-express.com',
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
	title : 'VISTA PRIVILEGIADA',
	hasChild : true,
	image : '../iphone/tables/itTips3/2.png',
	text : 'Se o objetivo for saborear uma deliciosa refeição e apreciar uma vista única da cidade histórica, o Ulus 29 é a escolha certa. Localizado no alto das colinas de Ulus, o restaurante oferece uma magnífica vista do Bósforo e suas mesquitas e pontes centenárias. A cozinha, comandada pelo aclamado chef Mert Seran, oferece um menu de 29 pratos clássicos com o melhor da tradicional culinária turca, arrematados por toques modernos e internacionais. Não deixe de experimentar o medley de cordeiro recheado com berinjela. O ambiente impecável e sofisticado une o contemporâneo ao tradicional e leva assinatura do premiado designer Zeynep Fadillioglu.\n\n\n\n',
	url : 'group-29.com',
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
	title : 'PRECIOSIDADE BIZANTINA',
	hasChild : true,
	image : '../iphone/tables/itTips3/3.png',
	text : 'Igreja de São Salvador em Chora, Mesquita Kariye, Museu de Kariye e Museu de Chora são só alguns dos nomes utilizados para designar a belíssima igreja transformada em museu de arquitetura bizantina, localizada em Edirnekapi. Muitas vezes descartada pelos turistas, guarda surpresas históricas. Construída por volta do ano 400 dentro dos muros de Constantinopla, foi transformada em mesquita pelo Império Otomano e teve seus históricos mosaicos e afrescos cobertos por gesso. Em 1948 passou por um incrível processo de restauração e dez anos depois foi transformada em museu.\n\n\n\n',
	url : 'choramuseum.com',
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