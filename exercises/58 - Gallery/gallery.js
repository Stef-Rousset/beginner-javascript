//closure
function Gallery(gallery){
  if (!gallery){
    throw new Error('No gallery here');
  }

// select elements we need
  const images = Array.from(document.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  let currentImage;

  // montrer l'img cliquée dans la modal
  function showImage(element) {
    if (!element) return;
    //mettre à jour l'img et ses infos dans la modal
    modal.querySelector('img').src = element.src;
    modal.querySelector('h2').innerText = element.title;
    modal.querySelector('figcaption p').innerText = element.dataset.description;
    currentImage = element;
    openModal();
  }
  // ouvrir la modal
  function openModal(){
    if (modal.matches('.open')) {
      return;
    }
    modal.classList.add('open');
    // event listeners lies a l'open de la modal
    modal.addEventListener('click', handleClickOutsideModal);
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }
  //fermer la modal
  function handleClickOutsideModal(event){
    // console.log(event.target); renvoit la modal
    // console.log(event.currentTarget); renvoit window outside modal
    if (event.target === event.currentTarget){
      closeModal();
    }
  }
  function handleKeyUp(event){
    if (event.key === 'Escape'){ // si c escape, pas necessaire de checker si prev ou next dons le return stoppe la fonction
      return closeModal();
    }
    if (event.key === 'ArrowRight'){
      return showNextImage();
    }
    if (event.key === 'ArrowLeft'){
      return showPrevImage();
    }
  }
  function closeModal(){
    modal.classList.remove('open');
    // event listeners lies a la fermeture de la modal
    modal.removeEventListener('click', handleClickOutsideModal);
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }
  // montrer l'image suivante
  function showNextImage(){
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }
  // montrer l'image precedente
  function showPrevImage(){
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }
  // event listeners
  images.forEach(image => image.addEventListener('click', (e) =>
   showImage(e.currentTarget)));
  // users of keyboard
  images.forEach(image =>
    image.addEventListener('keyup', e => {
      if (e.key === 'Enter') showImage(e.currentTarget);
    })
  );
}
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));

