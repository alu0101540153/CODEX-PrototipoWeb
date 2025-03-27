// En python.js, reemplaza todo con esto:

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
              // Simulación - en producción usa Judge0
              if (code.includes('print("Hola, mundo!")')) {
                  output.textContent = "Hola, mundo!";
              } else if (code.includes('nombre = "Ana"')) {
                  output.textContent = `Nombre: Ana\nEdad: 25\nAltura: 1.65\n¿Es estudiante?: True`;
              } else {
                  output.textContent = "Simulación: El código se ejecutaría aquí\n(En producción se conecta a Judge0 API)";
              }
          } catch (error) {
              output.textContent = `Error: ${error.message}`;
          } finally {
              this.disabled = false;
          }
      });
  });
});