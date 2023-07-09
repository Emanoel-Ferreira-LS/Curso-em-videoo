const form = document.getElementById('question-form');
const questions = Array.from(document.getElementsByClassName('question'));
const btnVoltar = document.getElementById('btn-voltar');
const btnAvancar = document.getElementById('btn-avancar');

let currentQuestionIndex = 0;

// Exibe a primeira pergunta
questions[currentQuestionIndex].classList.add('active');

// Adiciona um evento de mudança aos elementos de input radio
/*form.addEventListener('change', () => {
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
});*/

// Adiciona um evento de clique ao botão "Voltar"
btnVoltar.addEventListener('click', () => {
    if (currentQuestionIndex >= 0) {
      questions[currentQuestionIndex].classList.remove('active');
      questions[currentQuestionIndex - 1].classList.add('active');
      currentQuestionIndex--;
    } else if (currentQuestionIndex < 0) {
        currentQuestionIndex = currentQuestionIndex
    }
    console.log(currentQuestionIndex)
  });


// Adiciona um evento de clique ao botão "Avançar"
btnAvancar.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
      questions[currentQuestionIndex].classList.remove('active');
      currentQuestionIndex++;
      questions[currentQuestionIndex].classList.add('active');
    } else if (currentQuestionIndex === questions.length - 1) {
      // Caso o usuário esteja na última pergunta e clique em "Avançar"
      console.log('Formulário completo!');
    }
  });











