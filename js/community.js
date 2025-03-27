document.addEventListener('DOMContentLoaded', function() {
    // Modal para nuevo tema
    const newTopicBtn = document.getElementById('new-topic-btn');
    const modal = document.getElementById('new-topic-modal');
    const closeModal = document.querySelector('.close-modal');
    
    newTopicBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Formulario de nuevo tema
    const topicForm = document.getElementById('new-topic-form');
    topicForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí iría la lógica para enviar el tema al servidor
        alert('Tema creado con éxito!');
        modal.style.display = 'none';
        topicForm.reset();
    });
    
    // Simulación de chat
    const chatInput = document.querySelector('.chat-input input');
    const chatMessages = document.querySelector('.chat-messages');
    
    document.querySelector('.chat-input button').addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    function sendMessage() {
        const messageText = chatInput.value.trim();
        if (messageText) {
            const messageElement = document.createElement('div');
            messageElement.className = 'message reply';
            messageElement.innerHTML = `
                <span class="user">Tú:</span>
                <span class="text">${messageText}</span>
                <span class="time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
            `;
            chatMessages.appendChild(messageElement);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Simular respuesta después de 1 segundo
            setTimeout(() => {
                const botMessages = [
                    "Buena pregunta, ¿has revisado la documentación?",
                    "Puedes probar con este enfoque...",
                    "Ese es un problema común, la solución suele ser...",
                    "¿Podrías compartir el código que tienes hasta ahora?",
                    "Revisa este artículo que explica ese tema: [enlace]"
                ];
                const randomResponse = botMessages[Math.floor(Math.random() * botMessages.length)];
                
                const replyElement = document.createElement('div');
                replyElement.className = 'message';
                replyElement.innerHTML = `
                    <span class="user">AyudanteCODEX:</span>
                    <span class="text">${randomResponse}</span>
                    <span class="time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                `;
                chatMessages.appendChild(replyElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }
});