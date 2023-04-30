let initialPage= document.getElementById('initialpage');
let timer= document.getElementById('timer');
let quiz= document.getElementById('Quizes');
let startbtn= document.getElementById('start_btn')

let quiztime=60
let questionnumber=0;

let quizquestions=[{
    question: "question 1",
    choices:["choice 1","choice 2","choice 3"],
    answer: "choice 2"
},{
    question: "question 2",
    choices:["choice 4","choice 5","choice 6"],
    answer: "choice 4"
},{
    question: "question 3",
    choices:["choice 7","choice 8","choice 9"],
    answer: "choice 9"
},{
    question: "question 4",
    choices:["choice 10","choice 11","choice 12"],
    answer: "choice 11"
},{
    question: "question 5",
    choices:["choice 13","choice 14","choice 15"],
    answer: "choice 15"
}]
const questionElement = document.getElementById("question")
const answer= document.getElementById("answer")
const answerBtn = document.getElementById("next_btn")
timer.style.display= 'none'
quiz.style.display= 'none'

function starttimer(){
    initialPage.style.display="none"
    timer.style.display="block"

let interval=setInterval(function(){
    if(quiztime>0){
        quiztime=quiztime-1;
        timer.innerHTML="Time left is "+ quiztime + " seconds"
    } else{
        clearInterval(interval)
    }
},1000)
}

function startquiz(){
    quiz.style.display="block"
    quiz.innerHTML=""
    let currentQuestion= quizquestions[questionnumber];

    let container= document.createElement('div')

    let quizDiv= document.createElement('div')
    let question_paragraph= document.createElement('p')
    question_paragraph= currentQuestion.question
    quizDiv.append(question_paragraph)
    container.append(quizDiv)

    for(i=0;i<currentQuestion.choices.length;i++){
        let choiceDiv= document.createElement("div")
        let answerBtn= document.createElement("button")
        answerBtn.innerHTML=currentQuestion.choices[i]
        choiceDiv.append(answerBtn)
        container.append(choiceDiv)
    }

quiz.append(container)


}

function init(){
    starttimer()
    startquiz()
    nextBtn.innerHTML= "NEXT QUESTION";
    quizquestions();
}

startbtn.addEventListener('click',init)
let currentQuestionIndex= 0;
let score= 0;
