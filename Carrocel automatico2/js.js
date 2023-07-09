const form = document.getElementById('question-form');
const questions = Array.from(document.getElementsByClassName('question'));
const btnVoltar = document.getElementById('btn-voltar');


let currentQuestionIndex = 0;

// Exibe a primeira pergunta
questions[currentQuestionIndex].classList.add('active');

// Adiciona um evento de mudança aos elementos de input radio
form.addEventListener('change', () => {
  // Passa para a próxima pergunta
  currentQuestionIndex++;

  // Verifica se chegamos à última pergunta
  if (currentQuestionIndex === questions.length) {
    // Aqui você pode adicionar a lógica para processar o formulário completo
    console.log('Formulário completo!');
  } else {
    // Exibe a próxima pergunta
    questions[currentQuestionIndex - 1].classList.remove('active');
    questions[currentQuestionIndex].classList.add('active');
  }
});

// Adiciona um evento de clique ao botão "Voltar"
btnVoltar.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
      questions[currentQuestionIndex].classList.remove('active');
      currentQuestionIndex--;
      questions[currentQuestionIndex].classList.add('active');
    }
  });


/*.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length)
    questions[currentQuestionIndex - 1].classList.remove('active');
    questions[currentQuestionIndex].classList.add('active');
  });*/










