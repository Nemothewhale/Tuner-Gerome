
function note() {	
	console.log('NOTE PLAYER MODULE!!');
	
	this.note1 = Ti.Media.createSound({url:"sound.wav"});
	this.note2 = Ti.Media.createSound({url:"sound.wav"});
	this.note3 = Ti.Media.createSound({url:"sound.wav"});
	
}

note.prototype.playNote = function(note) {
	
	switch(note) {
		case 'E': this.note1.play(); break;
		case 'A': this.note2.play(); break;
		case 'D': this.note3.play(); break;
		
		
	}
	
	
};

module.exports = note-player;