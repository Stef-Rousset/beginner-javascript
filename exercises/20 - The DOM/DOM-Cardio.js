// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list and add three list items with the words "one, two, three" in them
const list = `
  <ul>
    <li class="item">one</li>
    <li class="item">two</li>
    <li class="item">three</li>
  </ul>
 `;
 // put that list into the above wrapper
    // first way
 // const myList = document.createRange().createContextualFragment(list);
 // div.appendChild(myList);
    // second way
    div.innerHTML = list;


// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://images.unsplash.com/photo-1607349658516-9fb46b47ce53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80';
// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = "Cute Puppy";
// Append that image to the wrapper
div.append(image);
// with HTML string, make a div, with two paragraphs inside of it
const secondDiv = `
<div class= second>
<p>Hello I am Beth</p>
<p>I am a photographer !</p>
</div>
`;
// put this div before the unordered list from above
div.insertAdjacentHTML('afterbegin', secondDiv);
// add a class to the second paragraph called warning
const second = document.querySelector('.second');
second.lastElementChild.classList.add('warning');

// remove the first paragraph
const firstParagraph = second.firstElementChild;
firstParagraph.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height){
  const myHtml = `
  <div class="playerCard">
  <h2>${name}— ${age}</h2>
  <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7} dogyears. That would be a tall dog!</p>
  <button class="delete">Remove</button>
  </div>

  `
  return myHtml;
}

// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');
// make 4 player cards using generatePlayerCard
const firstCard = generatePlayerCard('bob', 6, 130);
const secondCard = generatePlayerCard('bill', 4, 100);
const thirdCard = generatePlayerCard('wes', 10, 140);
const fourthCard = generatePlayerCard('cute', 3, 90);
// append those cards to the div
newDiv.innerHTML = firstCard ;
newDiv.insertAdjacentHTML('beforeend',secondCard);
newDiv.insertAdjacentHTML('beforeend',thirdCard);
newDiv.insertAdjacentHTML('beforeend',fourthCard);
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('afterbegin', newDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
const buttons = document.querySelectorAll('.delete');
function removeCard(event){
  buttonClicked = event.currentTarget;
  // buttonClicked.parentElement.remove();
  buttonClicked.closest('.playerCard').remove();
}
buttons.forEach(button => button.addEventListener('click', removeCard));

