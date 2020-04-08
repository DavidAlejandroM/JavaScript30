// ## Array Cardio Day 2

const peoples = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

const tbody1 = document.querySelector('.tbody1');
const tbody2 = document.querySelector('.tbody2');
const tbody3 = document.querySelector('.tbody3');
const answers = document.querySelectorAll('p.blue');
const tableDelete = document.querySelector('.table-delete');

console.log(tbody3)
const contentPeople = peoples.map(people => `
    <tr>
      <td>${people.name}</td>
      <td>${people.year}</td>
    </tr>
`).join('');
tbody1.innerHTML = contentPeople;

const contentComments = comments.map(comment => `
    <tr>
      <td>${comment.text}</td>
      <td>${comment.id}</td>
    </tr>
`).join('');
tbody2.innerHTML = contentComments;

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const older = peoples.some((people) => 
  (((new Date()).getFullYear() - people.year) >= 19));
answers[0].innerHTML=`R:/ is ${older}`;


// Array.prototype.every() // is everyone 19 or older?

const everies = peoples.every((people) => 
  (((new Date()).getFullYear() - people.year) >= 19));
  answers[1].innerHTML=`R:/ ${older}`;
console.log(everies);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const find = comments.find( comment => ( comment.id === 823423 ));
answers[2].innerHTML=`R:/ ${JSON.stringify(find)}`;
console.log(find);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex( comment => comment.id === 823423);
const commentsCopy = [
  ...comments.slice( 0, index),
  ...comments.slice(index +1, comments.length -1)];

console.table(commentsCopy);

const contentCommentsCopy = commentsCopy.map(comment => `
    <tr>
      <td>${comment.text}</td>
      <td>${comment.id}</td>
    </tr>
`).join('');
tbody3.innerHTML = contentCommentsCopy;
