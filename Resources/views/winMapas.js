var win = Ti.UI.currentWindow;
var fileData = 'dados.txt';
var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileData);
var data;

win.backgroundColor = '#282828';
win.title = 'Lojas';

var estados_data = [];

if (file.exists()) {
	var json = file.read();
	data = JSON.parse(json);
}

for (var i in data.estados) {

	var e = data.estados[i];

	var customLabel = Ti.UI.createLabel({
		text : '   ' + e.nome,
		font : {
			fontSize : 20,
			// fontFamily : 'HoeflerText-Italic'
			fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
			// fontFamily : 'Baskerville-Italic'
			// fontFamily : 'HelveticaNeue-UltraLight'
		},
		color : '#FFFF',
		shadowColor : '#EDDA74',
		shadowOffset : {
			x : 0,
			y : 1
		},
		borderRadius : 10,
		backgroundColor : '#181716',
		height : 30
	});

	var estado = Ti.UI.createTableViewSection({
		headerTitle : e.nome,
		font : {
			fontSize : 20,
			// fontFamily : 'HoeflerText-Italic'
			fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
			// fontFamily : 'Baskerville-Italic'
			// fontFamily : 'HelveticaNeue-UltraLight'
		},
		headerView : customLabel
	});

	for (var i in e.cidades) {
		var c = e.cidades[i];
		estado.add(Ti.UI.createTableViewRow({
			color : '#FFFF',
			borderColor : '#EDDA74',
			font : {
				fontSize : 16,
				//fontFamily : 'HoeflerText-Italic'
				//fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
				//fontFamily : 'Baskerville-Italic'
				fontFamily : 'HelveticaNeue-UltraLight'
			},
			backgroundGradient : {
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
			},
			title : c.nome,
			hasChild : (c.lojas.length > 0 ? true : false),
			lojas : c.lojas
		}));
	}

	estados_data.push(estado);
}

var btMapa = Titanium.UI.createButton({
	title : 'Encontre a loja mais próxima',
	backgroundImage : '../iphone/buttons/button_map.png',
	borderRadius : 13,
	font : {
		fontSize : 20,
		// fontFamily : 'HoeflerText-Italic'
		fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
		// fontFamily : 'Baskerville-Italic'
		// fontFamily : 'HelveticaNeue-UltraLight'
	},
	color : '#FFFF',
	height : 55,
	bottom : 10,
	zIndex : 8,
	width : '85%'
});

win.add(btMapa);

btMapa.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		navBarHidden : false,
		barColor : '#111',
		url : "LojasMapa.js",
		title : 'Lojas',
		data : data
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

var table = Ti.UI.createTableView({
	backgroundColor : '#282828',
	backgroundRepeat : false,
	top : -8,
	left : -6,
	right : -6,
	style : Titanium.UI.iPhone.TableViewStyle.GROUPED,
	data : estados_data,
	color : '#FFFF'
});

table.addEventListener("click", function(e) {
	if (e.source.hasChild) {
		var win = Titanium.UI.createWindow({
			backgroundColor : '#282828',
			navBarHidden : false,
			barColor : '#111',
			url : "LojasTable.js",
			title : e.source.title,
			lojas : e.source.lojas
		});

		Titanium.UI.currentTab.open(win, {
			animated : true
		});
	}
});

// add table view to the window
win.add(table);