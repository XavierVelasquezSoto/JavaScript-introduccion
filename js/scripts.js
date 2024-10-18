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