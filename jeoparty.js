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
            showQuestion(question);
        }
    });

    request.send();
    console.log("Sent");
}

function showQuestion(theQuestion) {

    //Making question show with <h2>
    let questionLabel = document.createElement('h2');
    questionLabel.textContent = theQuestion.question;
    console.log (theQuestion.question);

    let body = document.querySelector('body');
    body.appendChild(questionLabel);


}



window.addEventListener('load', init);

