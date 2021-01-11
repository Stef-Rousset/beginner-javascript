//fonction closure
function Slider(slider){
if (!slider){
  throw new Error('No slidr here');
}
  // set variables availables in all the functions
  let prev;
  let current;
  let next;
  // select elements needed
  const slides =  slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');
  // write functions to run the slider
  function startSlider(){
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }
  function addCssClasses(){
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }
  function move(direction){
    // enlever toutes les class
    current.classList.remove('current');
    prev.classList.remove('prev');
    next.classList.remove('next');
    // make an array of the new values, and destructure them over and into the prev, current and next variables
    if (direction === 'back'){
      [prev, current, next] = [
      prev.previousElementSibling || slides.lastElementChild,
      prev,
      current
      ]
    } else {
      [prev, current, next] = [
      current,
      next,
      next.nextElementSibling || slides.firstElementChild]
    }
    addCssClasses();
  }
  // wwhen the slider is created, run the functions to start it
  startSlider();
  addCssClasses();
  // add event listeners on buttons
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);

}
const sliderOne = Slider(document.querySelector('.slider'));
const sliderTwo = Slider(document.querySelector('.dog-slider'));
