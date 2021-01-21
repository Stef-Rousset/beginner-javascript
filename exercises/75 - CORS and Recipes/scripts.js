const baseEndpoint = 'http://www.recipepuppy.com/api';

async function fetchRecipes(query) {
  const response = fetch(`baseEndpoint?q=${query}`);
  const data = response.json();

}
