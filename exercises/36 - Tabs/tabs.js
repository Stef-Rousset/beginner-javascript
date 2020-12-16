// select elements we need
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');


function handleButtonClick(event){
// console.log(event.currentTarget); renvoit le bouton clique
// cacher tous les tabpanels
  tabPanels.forEach(tabPanel => {
     tabPanel.hidden = true ;
  });
// passer tous les boutons en aria-selected false
  tabButtons.forEach(tabButton => {
    tabButton.setAttribute('aria-selected', false);
  });
// passer la tab cliquee en aria-selected true
  event.currentTarget.setAttribute('aria-selected', true);
// passer le tapbpanel associe en hidden false
  const id = event.currentTarget.id;
  const tabPanel = document.querySelector(`[aria-labelledby="${id}"]`)
  tabPanel.hidden = false;
}
tabButtons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});
