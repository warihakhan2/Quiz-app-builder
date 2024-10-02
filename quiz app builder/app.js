const questions = [
  {
    que: "which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Json Object Notation",
    d: "Helicopter Terminals Motorboats Lamborginis",
    correct: "b",
  },
];
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll(".option");
const loadQuestion = () => {
    if(index === total){
       return endQuiz();
    }else{

    }
    reset();
  const data = questions[index];
  queBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
}


const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++
    }else{
        wrong++
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
if(input.checked){
    answer = input.value; 
}
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
}
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style = "text-align : center">
    <h3>Thank You For Playing The Quiz </h3>
    <h2>${right} / ${total} are correct</h2>
    </div>
    `
}
//initial call
loadQuestion();
