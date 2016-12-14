

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
}


function showGameElements(elements) {    
    //Show question 
    let questionLabel = document.querySelector('#question');
    questionLabel.textContent = ('Question: ' + elements.question);
   // console.log (elements.question);
  
   //Show category
    let category = document.querySelector('#category');
    category.textContent = ('Category: ' + elements.category.title);

    //Show points
    let points = document.querySelector('#points');
    points.textContent = ('Points: ' + elements.value);

    // let input = document.querySelector('input');
    // if (input.value === elements.answer) {
    //     elements.points + 1;
    // }
    // console.log(elements.points);

    let button = document.querySelector('button');
    button.textContent = "Submit";

    let userPoints = document.querySelector('h3');
    userPoints.textContent = ("User Points: " + 0);
}



window.addEventListener('load', init);

