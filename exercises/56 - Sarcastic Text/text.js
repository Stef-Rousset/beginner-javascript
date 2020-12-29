const filterInputs = document.querySelectorAll('[name="filter"]');
const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
// console.log(filters,textarea,result);
const funkyLetters = {
  '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
};

const filters = {
  sarcastic: function(letter, index){
    if (index % 2 == 0) {
      return letter.toUpperCase();
    }
    else {
      return letter.toLowerCase();
    }
  },
  funky: function(letter){
    // si la lettre a une valeur
  let funkyLetter = funkyLetters[letter];
  if (funkyLetter) return funkyLetter;
  // sinon regarder si une valeur existe en lowercase
  funkyLetter = funkyLetters[letter.toLowerCase()];
  if (funkyLetter) return funkyLetter;
  //sinon retourner la lettre
  return letter;
  },
  unable: function(letter){
    const number = Math.floor(Math.random() * 3);
    if (letter === ' ' && number === 1){        // une chance sur 3 de remplacer l'espace par ...
      return '...';
    }
    else {
      return letter;
    }

  },
}

function transformText(text){
  const filterSelected = Array.from(filterInputs).find(input => input.checked).value;
  // filterInputs est une nodeList donc on le transfo en array pr use find
  const textArray = Array.from(text).map(filters[filterSelected]);
  result.textContent = textArray.join('');
}


textarea.addEventListener('input', function(event){
  // console.log(event.target.value);
  transformText(event.target.value);
})

// pour que quand on change d'input le texte soit transfo automatiuement
filterInputs.forEach(input => input.addEventListener('input', function(){
    transformText(textarea.value);
}))
