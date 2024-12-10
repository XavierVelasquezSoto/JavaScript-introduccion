// 1- Crea una función llamada sayHello que reciba un nombre por parámetro y diga por consola "hola [nombre]".

/* function sayHello(name) {
  console.log('Hola ' + name);
}

sayHello('xavier'); */

const sayHello = (name) => {
  console.log("Hola " + name);
};
sayHello("Xavier");

//2- Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.

/* function calculateSquareArea(side) {
  console.log(side * side);
}
calculateSquareArea(5); */

const calculateSquareArea = (side) => {
  console.log(side * side);
};
calculateSquareArea(11);

//3 -Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura.

/* function calculateTriangleArea(base, height) {
  console.log((base * height) / 2);
}
calculateTriangleArea(2, 4); */

const calculateTriangleArea = (base, height) => {
  const area = (base * height) / 2;
  console.log(area);
};

calculateTriangleArea(10, 15);

//4 - Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio.

/* function calculateCircleArea(radius) {
  const pi = 3.14;
  console.log(pi * radius * radius);
}

calculateCircleArea(14); */

const calculateCircleArea = (radius) => {
  const pi = 3.14;
  const area = pi * (radius * radius);
  console.log(area);
};
calculateCircleArea(8);

//5 - Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.

/* function celsiusToFahrenheit(celsius) {
  console.log(celsius * 1.8 + 32);
}

celsiusToFahrenheit(100); */

const celsiusToFahrenheit = (celsius) => {
  const Fahrenheit = celsius * 1.8 + 32;
  console.log(Fahrenheit);
};
celsiusToFahrenheit(100);

//6- Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8.

/* function fahrenheitToCelsius(fahrenheit) {
  console.log((fahrenheit - 32) / 1.8);
}

fahrenheitToCelsius(212); */

const fahrenheitToCelsius = (Fahrenheit) => {
  const celsius = (Fahrenheit - 32) / 1.8;
  console.log(celsius);
};
fahrenheitToCelsius(212);

//7- Crea una función totalPrice que reciba un precio y le sume el IVA.

/* function totalPrice(price) {
  console.log(price + price * 0.21);
}
totalPrice(100); */

const totalPrice = (price) => {
  const iva = 1.21;
  const allprice = price * iva;
  console.log(allprice);
};
totalPrice(100);

//8- Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note].

/* function writeMessage(name, material, size, note) {
  const message = name + ' ha pedido una caja de ' + material + ', de tamaño ' + size + '. ' + note + ', es fragil.';
  console.log(message);
}

writeMessage('Xavier', 'metal', 'standard', 'Cuidado'); */

const writeMessage = (name, material, size, note) => {
  console.log(
    ` ${name} ha pedido una caja de ${material} de tamaño ${size}. ${note}`
  );
};
writeMessage("Xavier", "iphone", "L", "Etique dice: FRAGIL");
