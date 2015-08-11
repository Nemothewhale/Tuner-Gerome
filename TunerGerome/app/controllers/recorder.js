var record = Ti.Media.createAudioRecorder();


var button1 = Titanium.UI.createButton({
	title: 'E',
   	top: 10,
  	width: 100,
  	height: 50
});


var label = Titanium.UI.createLabel({
	text: 'Label Demo',
	top: 20,
	width: 100,
	height: 50,
});


button1.addEventListener('click',function(e) {
	record.start();	
});

button1.addEventListener('click',function(e) {
	record.stop();	
});

var i = 0;
while(true) {
	label.setText(i++);	
}

$.recorder.open();
