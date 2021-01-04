const form = document.querySelector('.shopping');
const list = document.querySelector('.list');

// creer un array qui contiendra l'ensemble des items
let items = [];

function handleSubmit(event){
  event.preventDefault(); // empecher le post du form
 if(!event.currentTarget.item.value) return;  // .item selectionne l'input dont le name est item
 const item = {
  name: event.currentTarget.item.value,
  id: Date.now(),    // permet de définir une valeur differente (les ms) pr chaque item
  completed: false,
 }
 items.push(item);
 displayItems();
 event.currentTarget.reset();  // remet l'input du form à vide
}

function displayItems() {
  const html = items.map(item =>
    `<li class='shopping-item'>
    <input value='${item.id}' name='item-${item.id}' type='checkbox'/>
    ${item.name}
    <button aria-label='Enlever ${item.name}' value='${item.id}'>&times</button>
    </li>`).join('');  // join transfo l'array en string le aria-label du button est pour les screenreaders
  list.innerHTML = html;
}
form.addEventListener('submit', handleSubmit);
