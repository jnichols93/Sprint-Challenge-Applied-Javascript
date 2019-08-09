// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


const ltHeader = document.querySelector('.header-container');
ltHeader.appendChild(buildHeader());

function buildHeader() {
    //define elements
const head = document.createElement('div');
const date = document.createElement('span');
const h1 = document.createElement('h1');
const temp = document.createElement('span');

//class

head.classList.add('header');
date.classList.add('date');
temp.classList.add('temp');

///content
 date.textContent('Schmaugust 9th, 2019');
 h1.textContent('Lambda Times');
 temp.textContent('98 Degrees');

 ///append the children

 head.appendChild(date);
 head.appendChild(h1);
 head.appendChild(temp);
 return head;
}
