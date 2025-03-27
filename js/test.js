document.addEventListener('DOMContentLoaded', function() {
    // Respuestas correctas
    const correctAnswers = {
        q1: 'a',
        q2: 'b',
        q3: 'a',
        q4: 'a',
        q5: 'a',
        q6: 'a',
        q7: 'a',
        q8: 'a',
        q9: 'a',
        q10: 'b'
    };

    // Explicaciones de las respuestas
    const answerExplanations = {
        q1: 'En Python se usa print() para mostrar mensajes en la consola.',
        q2: 'El operador ** es para exponenciación, por lo que 3 ** 2 = 9.',
        q3: 'Las listas en Python se definen con corchetes [].',
        q4: 'El método .append() añade un elemento al final de una lista.',
        q5: 'range(5) genera números del 0 al 4 (5 no incluido).',
        q6: '.strip() elimina espacios en blanco al inicio y final del string.',
        q7: 'Las funciones en Python se definen con la palabra clave def.',
        q8: 'Las tuplas son inmutables, no se pueden modificar después de creadas.',
        q9: '.keys() devuelve un objeto con todas las claves del diccionario.',
        q10: 'El slicing [1:4] toma desde el índice 1 hasta el 3 (4 no incluido).'
    };

    const totalQuestions = Object.keys(correctAnswers).length;
    let currentQuestion = 1;
    let userAnswers = {};
    let score = 0;

    // Elementos del DOM
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const progressBar = document.getElementById('test-progress');
    const progressText = document.getElementById('progress-text');
    const resultsContainer = document.getElementById('results');
    const retryBtn = document.getElementById('retry-btn');

    // Mostrar la primera pregunta
    showQuestion(currentQuestion);

    // Event listeners
    nextBtn.addEventListener('click', nextQuestion);
    prevBtn.addEventListener('click', prevQuestion);
    submitBtn.addEventListener('click', showResults);
    retryBtn.addEventListener('click', resetTest);

    // Función para mostrar una pregunta específica
    function showQuestion(questionNumber) {
        // Ocultar todas las preguntas
        document.querySelectorAll('.question-card').forEach(card => {
            card.classList.remove('active');
        });

        // Mostrar la pregunta actual
        document.getElementById(`q${questionNumber}`).classList.add('active');

        // Actualizar la barra de progreso
        const progressPercentage = (questionNumber / totalQuestions) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `Pregunta ${questionNumber} de ${totalQuestions}`;

        // Manejar estado de los botones
        prevBtn.disabled = questionNumber === 1;
        
        if (questionNumber === totalQuestions) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }

        // Marcar respuesta seleccionada si existe
        const selectedOption = userAnswers[`q${questionNumber}`];
        if (selectedOption) {
            document.getElementById(`q${questionNumber}${selectedOption}`).checked = true;
            showFeedback(questionNumber, selectedOption);
        }
    }

    // Función para avanzar a la siguiente pregunta
    function nextQuestion() {
        const currentQuestionId = `q${currentQuestion}`;
        const selectedOption = document.querySelector(`input[name="${currentQuestionId}"]:checked`);

        if (!selectedOption) {
            alert('Por favor selecciona una respuesta antes de continuar.');
            return;
        }

        // Guardar respuesta del usuario
        userAnswers[currentQuestionId] = selectedOption.value;

        // Mostrar feedback
        showFeedback(currentQuestion, selectedOption.value);

        // Avanzar a la siguiente pregunta después de un breve retraso
        setTimeout(() => {
            currentQuestion++;
            showQuestion(currentQuestion);
        }, 800);
    }

    // Función para retroceder a la pregunta anterior
    function prevQuestion() {
        currentQuestion--;
        showQuestion(currentQuestion);
    }

    // Función para mostrar feedback
    function showFeedback(questionNumber, selectedAnswer) {
        const feedbackElement = document.getElementById(`feedback-q${questionNumber}`);
        const isCorrect = selectedAnswer === correctAnswers[`q${questionNumber}`];

        feedbackElement.textContent = isCorrect 
            ? '✅ Correcto! ' + answerExplanations[`q${questionNumber}`]
            : '❌ Incorrecto. ' + answerExplanations[`q${questionNumber}`];
            
        feedbackElement.className = isCorrect ? 'feedback correct' : 'feedback incorrect';
    }

    // Función para calcular y mostrar resultados
    function showResults() {
        // Guardar última respuesta
        const lastQuestionId = `q${currentQuestion}`;
        const lastSelectedOption = document.querySelector(`input[name="${lastQuestionId}"]:checked`);
        if (lastSelectedOption) {
            userAnswers[lastQuestionId] = lastSelectedOption.value;
        }

        // Calcular puntuación
        score = 0;
        for (const question in correctAnswers) {
            if (userAnswers[question] === correctAnswers[question]) {
                score++;
            }
        }

        // Mostrar contenedor de resultados
        document.querySelector('.test-header').style.display = 'none';
        document.getElementById('python-test').style.display = 'none';
        resultsContainer.style.display = 'block';

        // Actualizar resultados
        const percentage = (score / totalQuestions) * 100;
        document.getElementById('score-percentage').textContent = `${percentage}%`;
        document.getElementById('correct-count').textContent = score;

        // Actualizar gráfico circular
        const scoreCircle = document.querySelector('.score-circle');
        scoreCircle.style.background = `conic-gradient(var(--python-color) ${percentage}%, #e9ecef ${percentage}%)`;

        // Mostrar mensaje según puntuación
        const scoreMessage = document.getElementById('score-message');
        if (percentage >= 80) {
            scoreMessage.textContent = '¡Excelente trabajo! Dominas los conceptos básicos de Python.';
            scoreMessage.style.color = 'var(--python-color)';
        } else if (percentage >= 50) {
            scoreMessage.textContent = 'Buen intento. Sigue practicando para mejorar.';
            scoreMessage.style.color = '#ffc107';
        } else {
            scoreMessage.textContent = 'Sigue aprendiendo. Revisa las lecciones y vuelve a intentarlo.';
            scoreMessage.style.color = '#dc3545';
        }

        // Mostrar respuestas correctas
        const answersList = document.getElementById('answers-list');
        answersList.innerHTML = '';
        
        for (let i = 1; i <= totalQuestions; i++) {
            const questionId = `q${i}`;
            const userAnswer = userAnswers[questionId] || 'No respondida';
            const isCorrect = userAnswer === correctAnswers[questionId];
            
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>Pregunta ${i}:</strong> 
                <span class="${isCorrect ? 'text-success' : 'text-danger'}">
                    ${isCorrect ? '✅' : '❌'} Tu respuesta: ${userAnswer.toUpperCase()}
                </span>
                <br>
                <small class="text-muted">${answerExplanations[questionId]}</small>
            `;
            answersList.appendChild(li);
        }
    }

    // Función para reiniciar el test
    function resetTest() {
        // Resetear variables
        currentQuestion = 1;
        userAnswers = {};
        score = 0;

        // Resetear UI
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.checked = false;
        });

        document.querySelectorAll('.feedback').forEach(feedback => {
            feedback.textContent = '';
            feedback.className = 'feedback';
        });

        document.querySelector('.test-header').style.display = 'block';
        document.getElementById('python-test').style.display = 'block';
        resultsContainer.style.display = 'none';

        // Mostrar primera pregunta
        showQuestion(currentQuestion);
    }
});
