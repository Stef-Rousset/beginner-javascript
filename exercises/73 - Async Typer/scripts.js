function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

function getRandomBetween(min = 20, max = 150) {
  return Math.floor(Math.random() * (max - min ) + min);
}

async function write(element){
  const text = element.textContent;
  let soFar = '';
  for (const letter of text){
    // console.log(lement.dataset);
    const { typeMin, typeMax } = element.dataset; // correspond au data-type-min et max
    const randomTime = getRandomBetween(typeMin,typeMax);
    await wait(randomTime);
    soFar += letter;
    element.textContent = soFar
  }
}

const elements = document.querySelectorAll('[data-type]');
elements.forEach(element => write(element));
