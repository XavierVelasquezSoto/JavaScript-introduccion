function sayHello(name) {
  console.log('hello ' + name);
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
  const message = name + ' tiene un ' + material + ' pequeño ' + size + ', de 15cm ' + note + ', es fragil ';
  console.log(message);
}

writeMessage('xavier', 'movil', 'standar', 'cuidado');
