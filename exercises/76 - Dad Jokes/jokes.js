const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];
const endpoint = 'https://icanhazdadjoke.com/'
const jokeButton = document.querySelector('.getJoke');
const jokeText = document.querySelector('.joke p');

async function fetchJoke(){
  const response = await fetch(endpoint, {
    headers: {
      Accept: 'application/json'
    }
  });
  const data = await response.json();
  return data.joke;
  // dans la data retournée il y a une clé joke qui contient le texte de la blague
}


async function handleClick(){
   const joke = await fetchJoke();
   jokeText.textContent = joke;
   jokeButton.textContent = randomItemArray(buttonText, jokeButton.textContent);
}
jokeButton.addEventListener('click', handleClick);

function randomItemArray(array, not){
  const item = array[Math.floor(Math.random() * array.length)];
  if (item === not){
    return randomItemArray(array,not);
  }
  return item;
}
