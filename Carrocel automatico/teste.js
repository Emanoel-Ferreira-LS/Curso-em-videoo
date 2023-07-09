const form = document.getElementById('question-form');
const questions = Array.from(document.getElementsByClassName('question'));
const btnVoltar = document.getElementById('btn-voltar');
const btnAvancar = document.getElementById('btn-avancar');

let currentQuestionIndex = 0;

// Exibe a primeira pergunta
questions[currentQuestionIndex].classList.remove('hidden');

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
    questions[currentQuestionIndex - 1].classList.add('hidden');
    questions[currentQuestionIndex].classList.remove('hidden');
  }
});

// Adiciona um evento de clique ao botão "Voltar"
btnVoltar.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    questions[currentQuestionIndex].classList.add('hidden');
    currentQuestionIndex--;
    questions[currentQuestionIndex].classList.remove('hidden');
  }
});

// Adiciona um evento de clique ao botão "Avançar"
btnAvancar.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length - 1) {
    questions[currentQuestionIndex].classList.add('hidden');
    currentQuestionIndex++;
    questions[currentQuestionIndex].classList.remove('hidden');
  } else if (currentQuestionIndex === questions.length - 1) {
    // Caso o usuário esteja na última pergunta e clique em "Avançar"
console.log('Formulário completo!');
}
});
