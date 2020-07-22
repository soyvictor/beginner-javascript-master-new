// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const ul = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`

// add three list items with the words "one, two three" in them
// put that list into the above wrapper

myDiv.innerHTML = ul;
console.log(myDiv);


// create an image
const img = document.createElement('img');
img.src = 'https://picsum.photos/500';


// set the source to an image
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'cute puppy';
// Append that image to the wrapper
myDiv.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph

const myHTML = `
  <div class="theDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>`

  const ulElement = myDiv.querySelector('ul');
  console.log(ulElement);
  ulElement.insertAdjacentHTML('beforebegin', myHTML);

  myDiv.children[1].classList.add('warning');

  const theDiv = document.querySelector('.theDiv');

  theDiv.firstElementChild.remove();

  test

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
