const buttons = document.querySelectorAll('button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleButtonClick(event){
  const btn = event.currentTarget;
  const card = btn.closest('.card');
  // recup l'img src
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').innerText;
  // integrer les infos dans la modal
  modalInner.innerHTML = `
  <img src = ${imgSrc.replace('200', '600')} alt='${name}'/>
  <p>${desc}</p>
  `
  // show the modal
  modalOuter.classList.add('open');
};

buttons.forEach( button =>
  button.addEventListener('click', handleButtonClick)
);

function closeModal(){
  modalOuter.classList.remove('open');
}
modalOuter.addEventListener('click', function(event) {
  const insideModalInner = event.target.closest('.modal-inner'); //
  if (!insideModalInner) {
    closeModal();
  }
})
window.addEventListener('keydown', function(event){
  if (event.key === 'Escape'){                    // cf keycode.info website
    closeModal();
  }
})
