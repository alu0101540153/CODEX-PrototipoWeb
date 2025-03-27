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
                // Resultados predefinidos para los ejemplos del tutorial
                let result = "";
                
                // 1. Hola Mundo
                if (code.includes('console.log("Hola, mundo!");')) {
                    result = "Hola, mundo!";
                }
                // 2. Tipos Básicos
                else if (code.includes('let nombre: string = "Ana";')) {
                    result = `Nombre: Ana, Tipo: string\nEdad: 25, Tipo: number\nLenguajes: TypeScript, JavaScript, Python\nTupla: Ana tiene 25 años`;
                }
                // 3. Interfaces
                else if (code.includes('interface Usuario {')) {
                    result = `Nombre: Carlos\nEdad: 30\nEmail: carlos@ejemplo.com`;
                }
                // 4. Clases
                else if (code.includes('class Persona {')) {
                    result = `Hola, soy Ana y tengo 20 años\nAna está estudiando TypeScript`;
                }
                // 5. Genéricos
                else if (code.includes('function identidad<T>')) {
                    result = `Hola TypeScript\n42\nContenido: Libro\nContenido: 100`;
                }
                // 6. Tipos Avanzados
                else if (code.includes('type Animal = {')) {
                    result = `{ nombre: 'Fido', edad: 5, tipo: 'terrestre' }\n{ nombre: 'Sin nombre' }`;
                }
                // 7. API con Tipos
                else if (code.includes('class FakeAPI')) {
                    result = `Usuarios: [{"id":1,"nombre":"Ana","email":"ana@ejemplo.com"},{"id":2,"nombre":"Carlos","email":"carlos@ejemplo.com"}]\nProductos: [{"id":1,"nombre":"Laptop","precio":999},{"id":2,"nombre":"Teléfono","precio":599}]\nUsuario con ID 1: {"id":1,"nombre":"Ana","email":"ana@ejemplo.com"}`;
                }
                else {
                    result = "Ejecución simulada: El código TypeScript funcionaría aquí\n(En producción usaríamos el compilador real)";
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