document.addEventListener('keydown', function(event){

    playSound(event.key);
});


function playSound(character) {

  if(character=='a') {
    var song1 = new Audio('sound/crash.mp3');
    song1.play();
  }
  else if(character=='b') {
    var song2 = new Audio('sound/kick-bass.mp3');
    song2.play();
  }
  else if(character=='c') {
    var song3 = new Audio('sound/snare.mp3');
    song3.play();
  }
  else if(character=='d') {
    var song4 = new Audio('sound/tom-1.mp3');
    song4.play();
  }
  else if(character=='e') {
    var song5 = new Audio('sound/tom-2.mp3');
    song5.play();
  }
  else if(character=='f') {
    var song6 = new Audio('sound/tom-3.mp3');
    song6.play();
  }
  else if(character=='g') {
    var song7 = new Audio('sound/tom-4.mp3');
    song7.play();
  }

}
