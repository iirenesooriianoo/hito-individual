// Obtener referencia al elemento de visualización de la calculadora
let result = document.getElementById('calculator__display');

// Variable para almacenar la expresión de cálculo
let expression = '';

// Función para agregar un valor a la expresión
function appendValue(value) {
  expression += value;
  result.textContent = expression;
}

// Función para agregar un operador a la expresión
function appendOperator(operator) {
  if (expression === '') return;
  if (isOperator(expression.slice(-1))) {
    expression = expression.slice(0, -1);
  }
  expression += operator;
  result.textContent = expression;
}

// Función para realizar el cálculo
function calculate() {
  if (expression === '') return;
  if (isOperator(expression.slice(-1))) {
    expression = expression.slice(0, -1);
  }
  try {
    let res = eval(expression);
    expression = res.toString();
    result.textContent = expression;
  } catch (error) {
    console.log('Error:', error);
  }
}

// Función para borrar el resultado
function clearResult() {
  expression = '';
  result.textContent = '';
}

// Función para eliminar el último carácter de la expresión
function backspace() {
  expression = expression.slice(0, -1);
  result.textContent = expression;
}

// Función para verificar si un valor es un operador
function isOperator(value) {
  return ['+', '-', '*', '/'].includes(value);
}

// Función para calcular el cuadrado del número
function calculateSquare() {
  if (expression === '') return;
  try {
    let res = eval(`Math.pow(${expression}, 2)`);
    expression = res.toString();
    result.textContent = expression;
  } catch (error) {
    console.log('Error:', error);
  }
}

// Función para calcular la raíz cuadrada del número
function calculateSquareRoot() {
  if (expression === '') return;
  try {
    let res = eval(`Math.sqrt(${expression})`);
    expression = res.toString();
    result.textContent = expression;
  } catch (error) {
    console.log('Error:', error);
  }
}

// Función para calcular el porcentaje del número
function calculatePercentage() {
  if (expression === '') return;
  try {
    let res = eval(`(${expression}) / 100`);
    expression = res.toString();
    result.textContent = expression;
  } catch (error) {
    console.log('Error:', error);
  }
}
