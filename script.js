const score = document.querySelector('#score');
const question = document.querySelector('#question');
const questionForm = document.querySelector('#question-form');
let inputNumber = document.querySelector('#input-number');
const btn = document.querySelector('.btn');
let storedAnswer;
let scor = 0;


const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateQuestion = () => {
    let a = randomNumber(1, 10);
    let b = randomNumber(1, 10);
    // let questn = `Q. What is the ${a} Multiply by ${b} ?`;
    // let answer = a * b;
    // return { questn, answer };
    let questn;
    let answer;
    let qNo = randomNumber(1,4);
    switch(qNo){
        case 1:
            questn = `Q. What is the ${a} Multiply by ${b} ?`;
            answer = a * b; 
            break;

        case 2:
            questn = `Q. What is the ${a} Divide by ${b} ?`;
            answer = a / b; 
            break;

        case 3:
            questn = `Q. What is the sum of ${a} and ${b} ?`;
            answer = a + b; 
            break;

        case 4:
            questn = `Q. What is the subtraction of ${a} and ${b} ?`;
            answer = a * b; 
            break;
            
    }
    return { questn, answer };

}

const showQuestion = () => {
    const { questn, answer } = generateQuestion(); 
    question.innerText = questn;
    storedAnswer = +answer;
}
showQuestion();

const checkAnswer = (event) => {
    event.preventDefault();
    const formData = new FormData(questionForm);
    const useranswer = +formData.get('answer');
    console.log(useranswer);
    
    if(useranswer === storedAnswer){
        scor += 1;
    }
    else {
        scor -= 1;
    }       
    score.innerText = scor;
    showQuestion();
    event.target.reset();
}






