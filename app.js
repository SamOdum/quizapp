function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<div id='quiz2'><h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> You scored " + quiz.score + " out of " + quiz.questions.length + "</h2></div>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which of these is not a programming language?", ["HTML", "Java", "Python", "Ruby"], "HTML"),
    new Question("Which of these countries is in Africa?", ["Comoros", "Maldives", "Fuji", "Andorra"], "Comoros"),
    new Question("In what year did the First World War start?", ["1845", "1868", "1914", "1961"], "1914"),
    new Question("In which country was the first ever university built?", ["Egypt", "India", "China", "Iran"], "Egypt"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6", "2", "4"], "4"),
    new Question("What does the word 'malaria' derived from Italian literally mean?", ["Mad area", "Wicked air", "Bad air", "Wicked area"], "Bad air"),
    new Question("In which continent was the first ever FIFA world cup played?", ["South America", "North America", "Africa", "Europe"], "South America"),
    new Question("Mark Zuckerberg is to ___ what Bill Gates is to Microsoft.", ["Netflix", "Apple", "Google", "Facebook"], "Facebook"),
    new Question("What chemical element in the periodic table begins with the letter K?", ["Kopper", "Kalcium", "Kobalt", "Kripton"], "Krypton"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),

    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();