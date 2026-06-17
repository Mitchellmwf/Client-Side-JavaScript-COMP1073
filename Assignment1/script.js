// Buttons
const subBtn = document.getElementById('subject');
const advBtn = document.getElementById('adverb');
const verbBtn = document.getElementById('verb');
const adjBtn = document.getElementById('adjective');
const objBtn = document.getElementById('object');
const locBtn = document.getElementById('location');

// Story stuff
const storyBtn = document.getElementById('storyButton');
const storyText = document.getElementById('storyText');

// Text fields
const subText = document.getElementById('subjectText');
const advText = document.getElementById('adverbText');
const verbText = document.getElementById('verbText');
const adjText = document.getElementById('adjectiveText');
const objText = document.getElementById('objectText');
const locText = document.getElementById('locationText');

// Word Lists
const subList = ['The fox', 'Ryan Reynolds', 'Bugs Bunny', 'My friend', 'The teacher'];
const advList = ['quickly', 'lazily', 'somberly', 'hesitantly', 'angrily'];
const verbList = ['jumped over', 'ran to', 'emailed', 'sat by', 'slept on'];
const adjList = ['red', 'big', 'small', 'lazy', 'boring'];
const objList = ['the ball', 'the tree', 'the receptionist', 'the house', 'the book'];
const locList = ['on the roof', 'in the park', 'in the backyard', 'at school', 'in the kitchen'];

// Function to cycle to the next item in the list and update the text
function cycleNext(element, list) {
    const num = (list.indexOf(element.textContent) + 1) % list.length;
    element.textContent = list[num];
}

// Event listeners
subBtn.addEventListener('click', () => cycleNext(subText, subList));
advBtn.addEventListener('click', () => cycleNext(advText, advList));
verbBtn.addEventListener('click', () => cycleNext(verbText, verbList));
adjBtn.addEventListener('click', () => cycleNext(adjText, adjList));
objBtn.addEventListener('click', () => cycleNext(objText, objList));
locBtn.addEventListener('click', () => cycleNext(locText, locList));

// Event listener for the story button to create the story
storyBtn.addEventListener('click', () => {
    // Combine adjective and object
    const text = objText.textContent.split(' ');
    text.splice(1, 0, adjText.textContent);
    const splicedObj = text.join(' ');
    // Set text
    storyText.textContent = `${subText.textContent} ${advText.textContent} ${verbText.textContent} ${splicedObj} ${locText.textContent}.`;
}
)

