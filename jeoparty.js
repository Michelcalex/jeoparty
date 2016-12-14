

function init() {
    getQuestion();

}




//function to get AJAX request
function getQuestion (){
    let request = new XMLHttpRequest();
    request.open('GET', 'http://jservice.io/api/random');
    request.addEventListener('load', function() {
        let response = JSON.parse(request.responseText);
        for(let i =0; i < response.length; i++) {
            let question = response[i];
            showGameElements(question);
        }
    });

    request.send();
    console.log("Sent");
}


function showGameElements(elements) {    
    //Making question show with <h2>
    let questionLabel = document.querySelector('#question');
    questionLabel.textContent = ('Question: ' + elements.question);
    console.log (elements.question);
  

    let category = document.querySelector('#category');
    category.textContent = ('Category: ' + elements.category.title);


    let points = document.querySelector('#points');
    points.textContent = ('Points: ' + elements.value);

}



window.addEventListener('load', init);

