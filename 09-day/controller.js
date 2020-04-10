const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      const body = document.querySelector('body');
      body.style.backgroundColor = 'black';
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hello guys!!!! :)');

    // Interpolated
    console.log('Hello wordl %s string', '💩');

    // Styled
    console.log('%c Iam some great text ', 'font-size: 20px; background: green; color:white;')
    
    // warning!
    console.warn('this is a warning message');

    // Error :|
    console.error('this is a error message');

    // Info
    console.info('this is a info message');

    // Testing
    console.assert('1' === 1, 'this is assert');

    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong')

    // clearing
    //console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
        console.log(`this is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years`);
      console.groupEnd(`${dog.name}`);
    })

    // counting
    console.count('Alejo');
    console.count('Alejo');
    console.count('Marin');
    console.count('Alejo');
    console.count('Alejo');
    console.count('Alejo');
    console.count('Marin');
    console.count('Alejo');
    console.count('Alejo');
    console.count('Marin');
    console.count('Alejo');
    console.count('Alejo');
    // timing
    const endpoint = 'https://coronavirus-19-api.herokuapp.com/countries';
    let pro = fetch(endpoint);

    console.time('fetching-data');
    pro.then( response => response.json() )
    .then( data => {
      console.timeEnd('fetching-data');
      console.log(data);
      console.table(data);
    });


