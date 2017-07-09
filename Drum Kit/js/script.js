
window.addEventListener('keydown', function(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if(!audio) return; //Stop the function from running off together
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

//removeTransition function
function removeTransition(event) {
  if(event.propertyName !== 'transform') return // skip it if Property Name is not 'transform'
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
