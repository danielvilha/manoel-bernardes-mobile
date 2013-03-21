Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;

//Criando a janela Rádio
var win = Titanium.UI.currentWindow;

//---------------------------------------ACTIVITY INDICATOR---------------------------------------------
var actInd = Titanium.UI.createActivityIndicator({
	style : Titanium.UI.iPhone.ActivityIndicatorStyle,
	zIndex : 9,
	top : '85.4%',
	left : 33
});

win.add(actInd);

function indAudio() {
	if (audioPlayer.waiting) {
		actInd.show();
	} else {
		actInd.hide();
	}
	//console.log(audioPlayer.waiting);
}

var loopIndicator;

//---------------------------------------------PLAUSE---------------------------------------------------
var pauseResumeButton = Titanium.UI.createButton({
	backgroundImage : '../iphone/buttons/play.png',
	enabled : false,
	height : '10%',
	left : 28,
	top : '85%',
	width : '15%'
});

win.add(pauseResumeButton);

pauseResumeButton.addEventListener('click', function() {
	if (audioPlayer.paused) {
		pauseResumeButton.backgroundImage = '../iphone/buttons/pause.png';
		audioPlayer.start();
	} else {
		pauseResumeButton.backgroundImage = '../iphone/buttons/play.png';
		audioPlayer.pause();
	}
});

//---------------------------------------------VOLUME---------------------------------------------------
var volumeSlider = Ti.UI.createSlider({
	left : '35%',
	right : 55,
	top : '87%',
	value : 100,
	min : 0,
	max : 100,
	zIndex : 9
});

win.add(volumeSlider);

volumeSlider.addEventListener('change', function(e) {
	audioPlayer.volume = e.value / 100
});

//--------------------------------------------PLAYER----------------------------------------------------
var button = ['../iphone/buttons/but_Lounge.png', '../iphone/buttons/but_Rock.png', '../iphone/buttons/but_MPB.png', '../iphone/buttons/but_POP.png'];
var buttonSel = ['../iphone/buttons/but_Lounge_sel.png', '../iphone/buttons/but_Rock_sel.png', '../iphone/buttons/but_MPB_sel.png', '../iphone/buttons/but_POP_sel.png'];
var title = ['Jazz Lounge', 'Rock', 'MPB', 'POP'];
var startStopButton = [];
var cont = 25;

var urlStream = ['http://200.195.168.12:9191', 'http://200.195.168.12:9292', 'http://200.195.168.12:9393', 'http://200.195.168.12:9494'];

var audioPlayer = Ti.Media.createAudioPlayer({
	url : urlStream[0],
	allowBackground : true
});

for (var i = 0, s = button.length; i < s; i++) {
	var objectButton = Ti.UI.createButton({
		title : title[i],
		backgroundImage : button[i],
		font : {
			fontSize : 26,
			// fontFamily : 'HoeflerText-Italic'
			fontFamily : 'BodoniSvtyTwoITCTT-BookIta'
			// fontFamily : 'Baskerville-Italic'
		},
		height : 45,
		width : '64%',
		top : cont + '%',
		center : '50%',
		zIndex : 9
	});
	cont += 13;
	win.add(objectButton);

	startStopButton.push(objectButton);
	startStopButton[i].urlStream = urlStream[i];
	startStopButton[i].buttonSel = buttonSel[i];
	startStopButton[i].button = button[i];

	function changeButton() {
		startStopButton[0].backgroundImage = button[0];
		startStopButton[1].backgroundImage = button[1];
		startStopButton[2].backgroundImage = button[2];
		startStopButton[3].backgroundImage = button[3];
	}


	startStopButton[i].addEventListener('click', function(e) {
		changeButton();
		if (Ti.Network.online == false) {
			alert('Está aplicação necessita de uma conexão Internet para funcionar: Favor verefique sua conexão.');
		} else {

			if (audioPlayer.playing || audioPlayer.paused) {
				if (audioPlayer.url == e.source.urlStream) {
					clearInterval(loopIndicator);
					audioPlayer.stop();
					e.source.backgroundImage = e.source.button;
					pauseResumeButton.backgroundImage = '../iphone/buttons/play.png';
					pauseResumeButton.enabled = false;
				} else {
					audioPlayer.stop();
					audioPlayer.url = e.source.urlStream;
					e.source.backgroundImage = e.source.buttonSel;
					pauseResumeButton.backgroundImage = '../iphone/buttons/pause.png';
					pauseResumeButton.enabled = true;
					audioPlayer.start();
				}
			} else {
				audioPlayer.url = e.source.urlStream;
				e.source.backgroundImage = e.source.buttonSel;
				pauseResumeButton.backgroundImage = '../iphone/buttons/pause.png';
				pauseResumeButton.enabled = true;
				audioPlayer.start();
				loopIndicator = setInterval(indAudio, 100);
			}
		}
	});
}

//--------------------------------------------------------------------------------------------
win.open();