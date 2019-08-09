/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
/// carousel creator

function carouselCreator(){
//define 
const carobody = document.createElement('div');
const leftbtn = document.createElement('div');
const img1 =document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
const img4 = document.createElement('img');
const rightbtn = document.createElement('div');

///class assignments
carobody.classList.add('carousel');
leftbtn.classList.add('left-button');
rightbtn.classList.add('right-button');

///content assignment
leftbtn.textContent = "go back";
rightbtn.textContent = "next";


///append


// return 
return carobody;
}