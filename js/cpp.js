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
                if (code.includes('cout << "Hola, mundo!" << endl;')) {
                    result = "Hola, mundo!";
                }
                // 2. Variables y Tipos
                else if (code.includes('cout << "Edad: " << edad << endl;')) {
                    result = "Edad: 25\nAltura: 1.65\nPi: 3.141592\nInicial: A\nEs estudiante: true";
                }
                // 3. Operaciones
                else if (code.includes('cout << "Suma: " << a + b << endl;')) {
                    result = "Suma: 13\nResta: 7\nMultiplicación: 30\nDivisión: 3.33333\nMódulo: 1\nPre-incremento: 6\nPost-incremento: 6\nValor final: 7";
                }
                // 4. Condicionales
                else if (code.includes('cout << "Eres mayor de edad" << endl;')) {
                    result = "Acabas de cumplir la mayoría de edad\nPuedes votar";
                }
                // 5. Bucles
                else if (code.includes('for (int i = 0; i < 5; i++)')) {
                    result = "Bucle for:\nValor: 0\nValor: 1\nValor: 2\nValor: 3\nValor: 4\n\nBucle while:\nContador: 0\nContador: 1\nContador: 2\n\nIterando sobre un vector:\nmanzana\nbanana\ncereza";
                }
                // 6. Clases y Objetos
                else if (code.includes('class Persona {')) {
                    result = "Hola, soy Ana y tengo 20 años\nEstoy estudiando Programación C++";
                }
                // 7. Calculadora
                else if (code.includes('cout << "1. Suma" << endl;')) {
                    result = "Ejemplo de calculadora (simulado)\nPara probar realmente, compila el código";
                }
                else {
                    result = "Ejecución simulada: El código C++ funcionaría aquí\n(En producción usaríamos un compilador real)";
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