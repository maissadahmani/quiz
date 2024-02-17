const questions = [ 
    {
        question: "What's the northernmost point of the African continent?",
        answers : [
            { text: "Les Almadies", correct: false},
            { text: "Cape Angela", correct: true},
            { text: "Cape Ras Xaafuun ", correct: false},
            { text: "Cape Agulhas", correct: false}
        ]

    },
    {
        question : "Who is known as the goddess of love?",
        answers:[
            { text: "Aphrodite", correct: true},
            { text: "Athena", correct: false},
            { text: "Gera ", correct: false},
            { text: "Demetra", correct: false}
        ]

    },
    {
        question : "When is the longest day of the year?",
        answers:[
            { text: "between 20 and 22 of May", correct: false},
            { text: "between 20 and 22 of June", correct: true},
            { text: "between 20 and 22 of July", correct: false},
            { text: "between 20 and 22 of August", correct: false}
        ]

    },
    {
        question : "How many legs does a spider have?",
        answers:[
            { text: "Six legs", correct: false},
            { text: "Eight legs", correct: true},
            { text: "Ten legs", correct: false},
            { text: "Twelve legs", correct: false}
        ]

    },
    {
        question : "What animal was considered sacred in ancient egypt?",
        answers:[
            { text: "Rabbits", correct: false},
            { text: "Lions", correct: false},
            { text: "Dogs ", correct: false},
            { text: "Cats", correct: true}
        ]

    },
    {
        question: "Who was the most streamed artist globally in 2023 on spotify?",
        answers : [
            { text: "The Weekend", correct: false},
            { text: "Bad Bunny", correct: false},
            { text: "Taylor Swift", correct: true},
            { text: "Drake", correct: false}
        ]

    },
    {
        question: "What's my favorite color?",
        answers : [
            { text: "Blue", correct: false},
            { text: "Green", correct: false},
            { text: "Pink", correct: true},
            { text: "Purple", correct: false}
        ]

    },
    {
        question: "What is the largest stadium in Germany ?",
        answers : [
            { text: "Allianz Arena", correct: false},
            { text: "Signal Iduna Park", correct: true},
            { text: "Merkur Spiel Arena", correct: false},
            { text: "Deutsche Bank Park", correct: false}
        ]

    },
    {
        question: "What is the language with the most native speakers ?",
        answers : [
            { text: "Spanish", correct: false},
            { text: "Hindi", correct: false},
            { text: "Mandarin", correct: true},
            { text: "English", correct: false}
        ]

    },
    {
        question: "What car manufacturer had the highest revenue in 2023 ?",
        answers : [
            { text: "Volkswagen AG", correct: true},
            { text: "Toyota Motor", correct: false},
            { text: "Mercedes-Benz Group AG", correct: false},
            { text: "BMW", correct: false}
        ]

    },
    {
        question: "What sports car company manufactures the 911?",
        answers : [
            { text: "Porsche", correct: true},
            { text: "Ferrari", correct: false},
            { text: "Lamborghini", correct: false},
            { text: "Maserati", correct: false}
        ]

    },
    {
        question: "In what country would you find Mount Kilimanjaro?",
        answers : [
            { text: "South Africa", correct: false},
            { text: "Uganga", correct: false},
            { text: "Tanzania", correct: true},
            { text: "Congo", correct: false}
        ]

    },
    {
        question: "What's the national flower of Japan?",
        answers : [
            { text: "Sunflowers", correct: false},
            { text: "Japenese Apricot", correct: false},
            { text: "Iris", correct: false},
            { text: "Cherry Blossom", correct: true}
        ]

    },
    {
        question: "What's the capital of Canada?",
        answers : [
            { text: "Montreal", correct: false},
            { text: "Quebec", correct: false},
            { text: "Toronto", correct: false},
            { text: "Ottawa", correct: true}
        ]

    },
    {
        question: "What was the most streamed album (on Spotify) in 2019?",
        answers : [
            { text: " WHEN WE ALL FALL ASLEEP, WHERE DO WE GO? - Billie Eilish", correct: true},
            { text: "Hollywood's Bleeding - Post Malone", correct: false},
            { text: "thank u, next - Ariana Grande", correct: false},
            { text: "No.6 Collaborations Project - Ed Sheeran", correct: false}
        ]

    }
    ,
    {
        question: "What is the currency of Denmark?",
        answers : [
            { text: "Euro", correct: false},
            { text: "Danish Krone", correct: true},
            { text: "Danish Mark", correct: false},
            { text: "Danish Dinar", correct: false}
        ]

    }
    ,
    {
        question: "What band was Harry Styles in before his solo career?",
        answers : [
            { text: "BTS", correct: false},
            { text: "The Wanted", correct: false},
            { text: "One Direction", correct: true},
            { text: "5 Seconds of Summer", correct: false}
        ]

    }
    ,
    {
        question: "Gouda is a popular cheese originating from which country?",
        answers : [
            { text: "France", correct: false},
            { text: "Italy", correct: false},
            { text: "The Netherlands", correct: true},
            { text: "Belgium", correct: false}
        ]

    }
    ,
    {
        question: "Which planet has the most moons?",
        answers : [
            { text: "Earth", correct: false},
            { text: "Mars", correct: false},
            { text: "Saturn", correct: true},
            { text: "Jupiter", correct: false}
        ]

    },
    {
        question: "How many hearts does an octopus have?",
        answers : [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false}
        ]

    }

];

const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("startBtn");
let currentQuestionIndex = 0;
let score = 0;

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}
startBtn.addEventListener("click", ()=>{
    startQuiz();
    document.getElementById("container-quiz").style.display = "flex";


} )

function startQuiz(){    
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    shuffle(questions)
    showQuestion();
    document.getElementById("startcontainer").style.display = "none";

}




function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach( answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextBtn.style.display = "none";
    questionElement.style.display = "block";
    scoreElement.style.display ="none"
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        } 
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.style.display = "none";
  
    scoreElement.innerHTML = `You scored ${score} out of 5.`;
    scoreElement.style.display ="block"
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < 5){
        showQuestion();
    }else{
        showScore();
 }
}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < 5){
        handleNextButton();
    } else{
        startQuiz();
    }
})


