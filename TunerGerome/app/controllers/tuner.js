/**
 * 
 *
 *@author gerome 
 */
var args = arguments[0] || {};

var recording = Ti.Media.createAudioRecorder();



var startStopButton = Titanium.UI.createButton({
	title : 'Start/Stop',
	top : '50dp',
	width : '200dp',
	height : '40dp'
});



startStopButton.addEventListener('click',function(e) {
	recording.start();
});

$.tuner.add(startStopButton);
