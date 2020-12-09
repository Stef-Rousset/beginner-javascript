

const button = document.querySelector('button');
function handleClick(event){
  console.log('you clicked the button');
}
button.addEventListener('click', handleClick);

window.addEventListener('click', function(event){
  console.log('you clicked the window');
}, { capture: true }
);

