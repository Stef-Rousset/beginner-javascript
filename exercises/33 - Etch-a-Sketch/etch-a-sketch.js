// select the elements on the page (canvas, shake button)
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // indispensable d'accéder et de définir le contexte pour pouvoir dessiner
const button = document.querySelector('.shake');
// set a variable for the amonut of move
const MOVE_AMOUNT = 10;
// set up the canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20 ;
// on veut que le trait change de couleur tout seul
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`; // valeur de départ, hsl(hue, saturation, lightness)
// on veut que les coordonnees x et y du point de depart du trait soient random
const width = canvas.width;
const height = canvas.height;
// const { width, height } = canvas; meme chose mais ecriture destructuree
let x = Math.floor(width * Math.random());
let y = Math.floor(height * Math.random());

ctx.beginPath(); // crée un nouveau trajet
ctx.moveTo(x, y) // deplace le stylo aux coordonées x et y
ctx.lineTo(x, y) // dessine une ligne depuis la position courante jusqu'aux coordonnées x et y specifiees
ctx.stroke(); // dessine le trajet


// write a draw function, on lui passe comme paramètre un objet options
function draw(options){
  // console.log(options.key); // voir quelle touche est tapee
  // change color
  hue += 5; // plus on incrémente plus la couleur change vite
  ctx.strokeStyle = `hsl(${hue}, 50%, 50%)`; // assigner la nouvelle valeur
  // draw
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move x and y values en fonction de ce que le user fait
  switch(options.key) {
    case 'ArrowUp' :
      y = y - MOVE_AMOUNT;
      break;
    case 'ArrowDown' :
      y = y + MOVE_AMOUNT;
      break;
    case 'ArrowRight' :
      x = x + MOVE_AMOUNT;
      break;
    case 'ArrowLeft' :
      x = x - MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}
// write a handler for the keys
function handleKey(event){
  if (event.key.includes('Arrow')){
  event.preventDefault;
  draw({key: event.key});
  }
}
// write a shake function to erase
function clearCanvas(){
  canvas.classList.add('shake');
  ctx.clearRect(0,0, width, height); //efface du coin en hau a gche jusqu'aux dimensions de l'ecran
  canvas.addEventListener('animationend', function(){
    canvas.classList.remove('shake');
  }, { once: true}); // remove the addEventListener when animation is ended
}
// listen for arrow keys
window.addEventListener('keydown', handleKey);
button.addEventListener('click', clearCanvas);
