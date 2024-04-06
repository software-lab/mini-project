const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Tata Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1947",
        b: "1995",
        c: "2024",
        d: "1994",
        correct: "b",
    },
    {
        question: "Which tag is used to create a heading in HTML?",
        a: "<h>",
        b: "<headings>",
        c: "<head>",
        d: "<h1> to <h6>",
        correct: "d",
    },
    {
        question: "What does HTTP stand for in web addresses?",
        a: "Hypertext Transfer Protocol",
        b: "Hypertext Terminal Program",
        c: " Hypertext Text Protocol",
        d: "Hypertext Terminal Process",
        correct: "a",
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        a: "//",
        b: "--",
        c: "#",
        d: "/*/",
        correct: "a",
    },
    {
        question: "What does the WWW stand for in a web address?",
        a: "World Web Wires",
        b: "World Wide Web",
        c: "Web World Wide",
        d: "Web Wrestling World",
        correct: "b",
    },
    {
        question: "Which attribute in HTML specifies the URL of the page the link goes to?",
        a: "src",
        b: "href",
        c: "link",
        d: " url",
        correct: "b",
    },
    {
        question: "What is the primary purpose of the <img> tag in HTML?",
        a: "To create a image",
        b: "To insert an image",
        c: "To define a image",
        d: "To paint a image",
        correct: "b",
    }
];




const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')




let currentQuiz = 0
let score = 0




loadQuiz()






function loadQuiz() {
    deselectAnswers()




    const currentQuizData = quizData[currentQuiz]




    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}




function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}




function getSelected() {
    let answer




    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })




    return answer
}




submitBtn.addEventListener('click', () => {
    const answer = getSelected()
   
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }




        currentQuiz++




        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>




                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})