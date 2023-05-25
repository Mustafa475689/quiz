
// objects
const  quizQtn = [
    {
        question : "Q1: Which country do you live.",
        a : "Pakistan",
        b : "India",
        c : "Turkey",
        d : "Japan",
        ans : "ans1"
    },

    {
        question : "Q2: Which country do you live.",
        a : "Pakistan",
        b : "India",
        c : "Turkey",
        d : "Japan",
        ans : "ans1"
    },

    {
        question : "Q3: Which country do you live.",
        a : "Pakistan",
        b : "India",
        c : "Turkey",
        d : "Japan",
        ans : "ans1"
    },

    {
        question : "Q4: Which country do you live.",
        a : "Pakistan",
        b : "India",
        c : "Turkey",
        d : "Japan",
        ans : "ans1"
    },

    {
        question : "Q5: Which country do you live.",
        a : "Pakistan",
        b : "India",
        c : "Turkey",
        d : "Japan",
        ans : "ans1"
    },

    {
        question : "Q6: Which country do you live.",
        a : "Pakistan",
        b : "India",
        c : "Turkey",
        d : "Japan",
        ans : "ans1"
    },

    {
        question : "Q7: Which country do you live.",
        a : "Pakistan",
        b : "India",
        c : "Turkey",
        d : "Japan",
        ans : "ans1"
    },

    {
        question : "Q8: Which country do you live.",
        a : "Pakistan",
        b : "India",
        c : "Turkey",
        d : "Japan",
        ans : "ans1"
    },

    {
        question : "Q9: Which country do you live.",
        a : "Pakistan",
        b : "India",
        c : "Turkey",
        d : "Japan",
        ans : "ans1"
    },

    {
        question : "Q10: Which country do you live.",
        a : "Pakistan",
        b : "India",
        c : "Turkey",
        d : "Japan",    
        ans : "ans1"
    },
]

// variables

const question = document.querySelector(".question");
const option1 = document.querySelector("#option-1");
const option2 = document.querySelector("#option-2");
const option3 = document.querySelector("#option-3");
const option4 = document.querySelector("#option-4");
const submit = document.querySelector("#submit");

const answer = document.querySelectorAll(".answer")

// functions

let questinInCount = 0;

const addQuestion = () => {

    const questionList = quizQtn[questinInCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

addQuestion ();

// EventListeners

const getCheckAnswer = () => {
    let answer;

    answer.forEach((curAnsElem) => {
        if (curAnsElem.checked){
            answer.curAnsElem.id;
        }
       
    });
    return answer;

};

submit.addEventListener("click", () => {
    const chekedAnswer = getCheckAnswer();

    console.log(chekedAnswer);
});