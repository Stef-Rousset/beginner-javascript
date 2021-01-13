//fonction prototypée
function Slider(slider){
if (!slider){
  throw new Error('No slider here');
}

  // select elements needed
  this.slides =  slider.querySelector('.slides');
  this.slider = slider;
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');
  // write functions to run the slider

  // wwhen the slider is created, run the functions to start it
  this.startSlider();
  this.addCssClasses();
  // add event listeners on buttons
  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', () => this.move());
}
Slider.prototype.startSlider = function() {
    this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
  }
Slider.prototype.addCssClasses = function() {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
  }
Slider.prototype.move = function(direction) {
    // enlever toutes les class
    this.current.classList.remove('current');
    this.prev.classList.remove('prev');
    this.next.classList.remove('next');
    // make an array of the new values, and destructure them over and into the prev, current and next variables
    if (direction === 'back'){
      [this.prev, this.current, this.next] = [
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current
      ]
    } else {
      [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild]
    }
    this.addCssClasses();
  }
const sliderOne = new Slider(document.querySelector('.slider'));
const sliderTwo = new Slider(document.querySelector('.dog-slider'));
console.log(sliderOne,sliderTwo);
