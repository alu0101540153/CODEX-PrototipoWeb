document.addEventListener('DOMContentLoaded', function() {
    // Configura todos los botones de ejecución
    document.querySelectorAll('.btn-run').forEach(button => {
        button.addEventListener('click', function() {
            const editor = this.closest('.interactive-editor');
            const code = editor.querySelector('.editor-content').textContent;
            const output = editor.querySelector('.output');
            
            output.textContent = "Ejecutando...";
            this.disabled = true;
            
            try {
                // Resultados predefinidos para los ejemplos comunes
                let result = "";
                
                if (code.includes('print("Hola, mundo!")')) {
                    result = "Hola, mundo!";
                } 
                else if (code.includes('nombre = "Ana"')) {
                    result = "Nombre: Ana\nEdad: 25\nAltura: 1.65\n¿Es estudiante?: True";
                }
                else if (code.includes('a = 10') && code.includes('b = 3')) {
                    result = `Suma: 13\nResta: 7\nMultiplicación: 30\nDivisión: 3.333...\nMódulo: 1\nPotencia: 1000`;
                }
                else if (code.includes('edad = 18')) {
                    result = "Eres mayor de edad\nPuedes votar";
                }
                else if (code.includes('for i in range(5)')) {
                    result = "0\n1\n2\n3\n4";
                }
                else {
                    result = "Ejecución simulada: El código Python funcionaría aquí\n(En una implementación real usaríamos una API como Pyodide)";
                }
                
                output.textContent = result;
                
            } catch (error) {
                output.textContent = `Error: ${error.message}`;
            } finally {
                this.disabled = false;
            }
        });
    });
  });