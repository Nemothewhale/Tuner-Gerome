var args = arguments[0] || {};


var sound = Titanium.Media.createSound({url:'sound.wav'});



var btn1 = Titanium.UI.createButton({
	title: 'E',
   	top: 10,
  	width: 100,
  	height: 50
});

var btn2 = Titanium.UI.createButton({
	title: 'A',
   	top: 60,
  	width: 100,
  	height: 50
});

var btn3 = Titanium.UI.createButton({
	title: 'D',
   	top: 110,
  	width: 100,
  	height: 50
});

var btn4 = Titanium.UI.createButton({
	title: 'B',
   	top: 160,
  	width: 100,
  	height: 50
});

var btn5 = Titanium.UI.createButton({
	title: 'G',
   	top: 210,
  	width: 100,
  	height: 50
});

var btn6 = Titanium.UI.createButton({
	title: 'E',
   	top: 260,
  	width: 100,
  	height: 50
});

$.noteplayer.add(btn1);
$.noteplayer.add(btn2);
$.noteplayer.add(btn3);
$.noteplayer.add(btn4);
$.noteplayer.add(btn5);
$.noteplayer.add(btn6);


btn1.addEventListener('click',function(e) {
	alert('sample message');
	sound.play();	
});

