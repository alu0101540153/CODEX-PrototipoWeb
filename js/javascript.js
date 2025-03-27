document.addEventListener('DOMContentLoaded', function() {
    // Configura todos los botones de ejecución
    document.querySelectorAll('.btn-run').forEach(button => {
        button.addEventListener('click', async function() {
            const editor = this.closest('.interactive-editor');
            const code = editor.querySelector('.editor-content').textContent;
            const output = editor.querySelector('.output');
            
            output.textContent = "Ejecutando...";
            this.disabled = true;
            
            try {
                // Crear un nuevo script para evaluar el código de forma segura
                const originalConsoleLog = console.log;
                let logOutput = [];
                
                // Sobrescribir console.log temporalmente para capturar la salida
                console.log = function() {
                    logOutput.push(Array.from(arguments).join(' '));
                    originalConsoleLog.apply(console, arguments);
                };
                
                // Evaluar el código (versión simple - en producción usaría sandbox o API)
                new Function(code)();
                
                // Restaurar console.log
                console.log = originalConsoleLog;
                
                // Mostrar resultados
                if (logOutput.length > 0) {
                    output.textContent = logOutput.join('\n');
                } else {
                    output.textContent = "El código se ejecutó pero no produjo salida visible (usa console.log)";
                }
                
            } catch (error) {
                output.textContent = `Error: ${error.message}`;
            } finally {
                this.disabled = false;
            }
        });
    });
  });