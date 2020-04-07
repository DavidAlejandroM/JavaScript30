const endpoint = 'https://coronavirus-19-api.herokuapp.com/countries';

let pro = fetch(endpoint);

let countries = [];

pro.then( response => response.json() )
.then( data => countries.push(...data) );

console.log(pro);


function findMatches(wordToMatch, countries){
  return countries.filter( place => {

    const regex = new RegExp(wordToMatch, 'gi');
    return place.country.match(regex);
  })
}

function displayMatchers(){
  const matchCountries = findMatches(this.value, countries);
  const html = matchCountries.map( country => {
    return `
    <li>
      <span class="name">${country.country}<span>
      <span class="population">Casos Totales: ${country.cases}<span>
    </li>
    `
  }).join('');
  suggestions.innerHTML = html;
}

const inputSearch = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

inputSearch.addEventListener('change', displayMatchers);
inputSearch.addEventListener('keyup', displayMatchers);

console.log(countries);
