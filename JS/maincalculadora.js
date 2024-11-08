let numeroingresado = 0;
let resultado = 0;
let operation = null;

document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('numberInput');
    const desabilitado = document.getElementById('desabilitado');

    document.querySelectorAll('button[data-operation]').forEach(button => {
        button.addEventListener('click', () => setOperation(button.dataset.operation));
    });

    document.getElementById('equalsButton').addEventListener('click', calculateresultado);
    document.getElementById('clearButton').addEventListener('click', clearDisplay);

    function setOperation(op) {
        numeroingresado = parseFloat(numberInput.value) || 0;
        if (operation !== null) {
            calculateresultado();
        } else {
            resultado = numeroingresado;
        }
        operation = op;
        numberInput.value = '';
    }

    function calculateresultado() {
        const newNumber = parseFloat(numberInput.value) || 0;
        switch (operation) {
            case '+': resultado += newNumber; break;
            case '-': resultado -= newNumber; break;
            case '*': resultado *= newNumber; break;
            case '/': resultado /= newNumber; break;
        }
        desabilitado.value = resultado;
        numberInput.value = '';
        operation = null;
    }

    function clearDisplay() {
        numberInput.value = '';
        desabilitado.value = '';
        resultado = 0;
        operation = null;
    }
});