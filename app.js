// import functions and grab DOM elements
const button = document.getElementById('submit-button');
const story = document.getElementById('story');
const formDiv = document.getElementById('form');

// INPUTS
const inputVerb1 = document.getElementById('verb-1');
const inputNoun1 = document.getElementById('noun-1');
const inputAdj1 = document.getElementById('adj-1');
const inputNoun2 = document.getElementById('noun-2');
const inputVerb2 = document.getElementById('verb-2');
const inputNoun3 = document.getElementById('noun-3');
const inputNoun4 = document.getElementById('noun-4');

// SPANS
const spanVerb1 = document.getElementById('span-verb-1');
const spanNoun1 = document.getElementById('span-noun-1');
const spanAdj1 = document.getElementById('span-adj-1');
const spanNoun2 = document.getElementById('span-noun-2');
const spanVerb2 = document.getElementById('span-verb-2');
const spanNoun3 = document.getElementById('span-noun-3');
const spanNoun4 = document.getElementById('span-noun-4');

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const value1 = inputVerb1.value;
    spanVerb1.textContent = value1;

    const value2 = inputNoun1.value;
    spanNoun1.textContent = value2;

    const value3 = inputAdj1.value;
    spanAdj1.textContent = value3;

    const value4 = inputNoun2.value;
    spanNoun2.textContent = value4;

    const value5 = inputVerb2.value;
    spanVerb2.textContent = value5;

    const value6 = inputNoun3.value;
    spanNoun3.textContent = value6;

    const value7 = inputNoun4.value;
    spanNoun4.textContent = value7;


    formDiv.classList.toggle('hidden');
    story.classList.toggle('hidden');
});