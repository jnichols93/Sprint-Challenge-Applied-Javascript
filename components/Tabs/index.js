// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(function(response){
    console.log(response);
    createTabs(response.data.topics);
})
.catch(function(err){
    console.log(err);
})
function createTabs(topicArray){
    const topics = document.querySelector('.topics');
    topicArray.forEach(i => {
        const tab=document.createElement('div');
        tab.classList.add('tab')
        topics.appendChild(tab);
        tab.textContent = ('topic');
    });
}