//Dom Elements
//##########################################################
const startButton = document.querySelector('.btn-start');
const nextButton = document.querySelector('.btn-next');
const headingPrimaryStart = document.querySelector('.heading-primary-start');
const headingPrimaryRestart = document.querySelector('.heading-primary-restart');
const questionElement = document.querySelector('.question');
const answerElement = document.querySelector('.btn-ans');
const answerContainer = document.querySelector('.answer-container');
const body = document.querySelector('body');
//##########################################################

//VARIABLES 
let shuffledQuestions, shuffledQuestionsIndex;

//STATE
const state = {}
//CLEAR STATE
const clearState = () => {
    answerContainer.innerHTML = '';


}

//EVENT LISTENER ADDED TO MOVE TO NEXT QUESTION
nextButton.addEventListener('click', () => {
    clearState()
    nextButton.classList.add('hide');
    if (body.classList.contains('correct')) {
        body.classList.remove('correct')
    } else {
        body.classList.remove('incorrect')
    }
    shuffledQuestionsIndex++;
    nextQuestion();
});

//CLICK LISTENER ON STARTBUTTON
startButton.addEventListener('click', () => {
    startQuiz();


});

// STARTING POINT
const startQuiz = () => {
    headingPrimaryStart.classList.add('hide');
    questionElement.classList.remove('hide');
    answerContainer.classList.remove('hide');
    headingPrimaryRestart.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    startButton.classList.add('hide');
    // console.log(shuffledQuestions)
    shuffledQuestionsIndex = 0;
    clearState();
    nextQuestion();
}
//MOVE TO NEXT QUESTION
const nextQuestion = () => {
    showQuestion(shuffledQuestions[shuffledQuestionsIndex]);
}

//SHOW THE RENDERED QUESTION
const showQuestion = (question) => {
    state.question = question.question;
    state.answer = question.answer;
    questionElement.textContent = state.question;
    if (state.answer) {
        state.answer.forEach(
            (ans) => {
                //CREATED THE LIST OF ANSWER BUTTONS
                const button = document.createElement('button');
                button.textContent = ans.ans;
                button.classList.add('btn');

                if (ans.correct) {
                    button.dataset.correct = ans.correct;
                }
                answerContainer.append(button);
                if (button) {
                    //ADDED A CLICK LISTENER TO THE CREATED BUTTONS
                    button.addEventListener('click', (e) => {
                        correctAns(e)

                    })
                }
            }
        )
    }
}

const correctAns = (e) => {
    // CHECK IF THE QUIZ IS AT THE LAST QUESTION
    if (shuffledQuestions.length > shuffledQuestionsIndex + 1) {
        startButton.classList.add('hide');
        nextButton.classList.remove('hide');
    } else {
        startButton.textContent = 'Restart';
        startButton.classList.remove('hide');
        nextButton.classList.add('hide');
        answerContainer.classList.add('hide');
        questionElement.classList.add('hide');
        headingPrimaryRestart.classList.remove('hide');


    }
    //ADDED THE CORRECT AND INCORRECT CLASSES TO  CHANGE COLOR 
    Array.from(answerContainer.children).forEach((button) => {
        const correct = e.target.dataset.correct;
        if ((button.dataset.correct)) {
            button.classList.add('correct');

        } else {
            button.classList.add('incorrect');

        }

        if (correct) {
            body.classList.add('correct')
        } else {
            body.classList.add('incorrect');
        }

    });


}


//DATA
//##########################################################
const questions = [{
        question: 'Name the currency used in Japan ?',
        answer: [{
                ans: 'Taka',
                correct: false
            },
            {
                ans: 'Dinar',
                correct: false
            },
            {
                ans: 'Ngultrum',
                correct: false
            },
            {
                ans: 'Yen',
                correct: true
            }
        ]
    }, {
        question: 'Which animal is the tallest in the world ?',
        answer: [{
                ans: 'Elephant',
                correct: false
            },
            {
                ans: 'Giraffe',
                correct: true
            },
            {
                ans: 'Zebra',
                correct: false
            },
            {
                ans: 'Kangaroo',
                correct: false
            }
        ]
    },
    {
        question: 'Ottawa is the capital of which country ?',
        answer: [{
                ans: 'India',
                correct: false
            },
            {
                ans: "England",
                correct: false
            },
            {
                ans: "Australia",
                correct: false
            },
            {
                ans: 'Canada',
                correct: true
            }
        ]
    }, {
        question: 'Which car company makes the Corolla ? ',
        answer: [{
                ans: 'Nissan',
                correct: false
            },
            {
                ans: "Toyota",
                correct: true
            },
            {
                ans: "Subaru",
                correct: false
            },
            {
                ans: 'Honda',
                correct: false
            }
        ]
    }, {
        question: 'Which country is Amsterdam located in ? ',
        answer: [{
                ans: 'Germany',
                correct: false
            },
            {
                ans: "Albania",
                correct: false
            },
            {
                ans: "Netherlands",
                correct: true
            },
            {
                ans: 'Finland',
                correct: false
            }
        ]
    }
];
//##########################################################