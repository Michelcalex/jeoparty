let score = 0;
let answer = null;
let pointValue = null;


function init() {
    getQuestion();
    let button = document.querySelector('button');
    button.addEventListener('click', checkAnswer);
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
            answer = question.answer;
            console.log(answer);
            pointValue = question.value;
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
    points = document.querySelector('#points');
    points.textContent = ('Points: ' + elements.value);

    //Show button
    button = document.querySelector('button');
    button.textContent = "Guess";

    let userPoints = document.querySelector('h3');
    userPoints.textContent = ("User Points: " + score);

   
}





window.addEventListener('load', init);





//FUNCTION CHECK ANSWER AND GET ANOTHER QUESTION
function checkAnswer () {
    let input = document.querySelector('#input');
    if(input.value === answer) {
        //console.log(score);
        score = score + pointValue;
       //console.log(score);
    }
    input.value = '';
    getQuestion();
}




