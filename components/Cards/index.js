// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// axios call;
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then (data =>{
    console.log('api is working',data);
    const articles = data.data.articles;
    const cards =document.querySelector('.cards-container');
    console.log(articles);
    
})

/// card creator

function cardCreator(articleHeadline, authorImg, nameOfAuthor){
    const newCard = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgc = document.createElement('div');
    const authImg = doc.createElement('span');
    const byAuth = doc.createElement('span');

    ///class assignments

    newCard.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgc.classList.add('img-container');

///content
headLine.textContent = articleHeadline;
author.textContent = nameOfAuthor;
authImg.src = authorImg;
console.log = (authorImg);

///append

newCard.appendChild(headLine);
newCard.appendChild(author);
author.appendChild(imgc);
author.appendChild(byAuth);

return newCard;
}