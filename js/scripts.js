function sayHello(name) {
  console.log('Hola ' + name);
}

sayHello('xavier');

function calculateSquareArea(side) {
  console.log(side * side);
}

calculateSquareArea(5);

function calculateTriangleArea(base, height) {
  console.log((base * height) / 2);
}

calculateTriangleArea(2, 4);

function calculateCircleArea(radius) {
  const pi = 3.14;
  console.log(pi * radius * radius);
}

calculateCircleArea(14);

function celsiusToFahrenheit(celsius) {
  console.log(celsius * 1.8 + 32);
}

celsiusToFahrenheit(100);

function fahrenheitToCelsius(fahrenheit) {
  console.log((fahrenheit - 32) / 1.8);
}

fahrenheitToCelsius(212);

function totalPrice(price) {
  console.log(price + price * 0.21);
}

totalPrice(100);

function writeMessage(name, material, size, note) {
  const message = name + ' ha pedido una caja de ' + material + ', de tamaño ' + size + '. ' + note + ', es fragil.';
  console.log(message);
}

writeMessage('Xavier', 'metal', 'standard', 'Cuidado');

//


function hello(name){
  return 'Hola' + name;
}

const resultName = hello(' Xavier');
console.log(resultName);

//

function squareArea(side){
  return (side * side);
}


const resultSquare = squareArea(5,5);
console.log(resultSquare);

//

function triangleArea(base, height){
  return base * height / 2;
}

const resultTriangle = triangleArea(2,4);
console.log(resultTriangle);

//

function circleArea (radius){
  const pi = 3.14;
  return pi * radius * radius;
}

const resultCircle = circleArea(14)
console.log(resultCircle)

//

function calculateCelsius(celsius){
  return celsius * 1.8 + 32;
}

const resultCelsius = calculateCelsius(100);
console.log(resultCelsius);

//

function calculateFahrenheit(fahrenheit){
  return (fahrenheit - 32) / 1.8;
}

const resultFahrenheit = calculateFahrenheit(212);
console.log(resultFahrenheit);

//


function allPrice(price){
  const iva = 0.21;
  return price + price * iva;
}

const resultPrice = allPrice(100);
console.log(resultPrice);


//


function message(name,material,size,note){
  return name + ' ha pedido una caja de ' + material + ', de tamaño ' + size + '. ' + note + ', es frágil';
}

const resultMessage = message('Xavier','metal','standard','Cuidado');
console.log(resultMessage);




/* 

function example(a, b) {
  return a + b;
}

function printDouble(number) {
  console.log(number * 2);
}

const resultA = example(1, 2);
const resultB = example(6, 3);
printDouble(resultA);
printDouble(resultB);


*/