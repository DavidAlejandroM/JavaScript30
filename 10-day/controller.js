let initCheckboxes = (data) => {
  const inbox = document.querySelector('.inbox');
  const keys = Object.keys(data[0]);
  const isEnables = [];

  keys.forEach(key => isEnables.push(false));

  const htmlCheckboxes = keys.map(key => ` <div class="item">
                                                <input type="checkbox">
                                                <p>${key}</p>
                                              </div>`).join('');
  inbox.innerHTML = htmlCheckboxes;

  

  const checkboxes = [...document.querySelectorAll('.inbox input[type="checkbox"]')];
  console.log(checkboxes)

  let lastCheked;

  function handleCheck(e) {

    if(this.checked){
      let index = checkboxes.findIndex((index) => index == this);
      isEnables[index] = true;
      makeTable(keys,data,isEnables);
    }
    else {
      let index = checkboxes.findIndex((index) => index == this);
      isEnables[index] = false;
      makeTable(keys,data,isEnables);
    }
    

    let inBetween = false;

    if (e.shiftKey && this.checked) {
      checkboxes.forEach(checkbox => {

        if (checkbox === this || checkbox === lastCheked) {
          inBetween = !inBetween;
        }

        if (inBetween) {
          checkbox.checked = true;
        }

        if(checkbox.checked){
          let index = checkboxes.findIndex((index) => index == checkbox);
          isEnables[index] = true;
          makeTable(keys,data,isEnables);
        }
        else {
          let index = checkboxes.findIndex((index) => index == checkbox);
          isEnables[index] = false;
          makeTable(keys,data,isEnables);
        }
      })
    }

    lastCheked = this;
  }

  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
  
}

function makeTable(keys,data,isEnables) {
  const headers = document.querySelector('tr');
  const body = document.querySelector('tbody');

  const headerHtml = keys.map((key,index) => isEnables[index] ?
    `<th><h1>${key}</h1></th>`:``).join('');

  headers.innerHTML = headerHtml;

  const bodyHtml = data.map(country => {
    return `<tr>${keys.map((key,index) => isEnables[index] ?
      `<td>${country[`${key}`]}</td>
    `:``).join('')}</tr>`;
  }).join('');
    

  body.innerHTML = bodyHtml;
}

const endpoint = 'https://coronavirus-19-api.herokuapp.com/countries';
let pro = fetch(endpoint);
let countries = [];

pro.then(response => response.json())
  .then(data => {
    countries = [...data];
    initCheckboxes(countries);
  });