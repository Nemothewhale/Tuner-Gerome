function doClick(e) {
    alert($.label.text);
}

var button1 = Ti.UI.createButton({
	title: 'Tuner',
	width:'200',
	height:'40',
	top:20
});

var button2 = Ti.UI.createButton({
	title: 'Recorder',
	width:'200',
	height:'40',
	top:70
});

var button3 = Ti.UI.createButton({
	title: 'Frequency Player',
	width:'200',
	height:'40',
	top:150
});

button1.addEventListener('click', function() {
	alert('module1');
	Alloy.createController('tuner').getView().open();
});

button2.addEventListener('click', function() {
	alert('module2');
	Alloy.createController('recorder').getView().open();
});

button3.addEventListener('click', function() {
	alert('module3');
	Alloy.createController('noteplayer').getView().open();
});

$.index.add(button1);
$.index.add(button2);
$.index.add(button3);

$.index.open();
