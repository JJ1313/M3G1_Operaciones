// Ejercicio 2

const num1 = parseInt(prompt('Ingresa un numero: '));
const num2 = parseInt(prompt('Ingresa un numero: '));

document.write(`
  <h3>Operaciones</h3>
  <div>Numeros: ${num1} - ${num2}<div> 
  <div>Suma: ${num1 + num2}</div>
  <div>Resta: ${num1 - num2}</div>
  <div>Multi: ${num1 * num2}</div>
  <div>Div: ${num1 / num2}</div>
  <div>Mod: ${num1 % num2}</div>
  <br>
`);


// Ejercicio 3

const tempC = parseInt(prompt('Ingrese T° en °C: '));

const tempK = tempC + 273.15;
const tempF = (tempC * 9/5) + 32;

document.write(`
  <h3>Transformacion Temperatura</h3>
  <div>T en Celcius   : ${tempC}</div> 
  <div>T en Kelvin    : ${tempK}</div> 
  <div>T en Farenheit : ${tempF}</div> 
  <br>
`);

// Ejercicio 4

let dias = parseInt(prompt('Ingresa cantidad de dias: '));

const annos = Math.floor(dias / 365);
let diasRestantes = dias % 365;

const semanas = Math.floor(diasRestantes / 7);
diasRestantes = diasRestantes % 7;

document.write(`
  <h3>Transformacion Dias</h3>
  <div>${dias} dias equivale a:</div>
  <div>${annos} annos | ${semanas} semanas | ${diasRestantes} dias</div>
  <br>
`);

// Ejercicio 5

const n1 = parseInt(prompt('n1: '));
const n2 = parseInt(prompt('n2: '));
const n3 = parseInt(prompt('n3: '));
const n4 = parseInt(prompt('n4: '));
const n5 = parseInt(prompt('n5: '));

const suma = n1 + n2 + n3 + n4 + n5;
document.write(`
<h3>Suma & Promedio 5 numeros</h3>
<div>Numeros: ${n1} - ${n2} - ${n3} - ${n4} - ${n5}</div>
<div>Suma: ${suma}<div>
<div>Promedio: ${suma / 5}<div>
`);