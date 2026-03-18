// tempConv.js
/*2. Write a function named `convertToCelsius` which takes a temperature
 in Fahrenheit and returns the equivalent temperature in Celsius.*/

/*3. Write a function named `describeTemperature` which takes a temperature in Fahrenheit and returns a description according to this table:

   | Temperature (°C) | Description |
   | ---------------- | ----------- |
   | < 0              | very cold   |
   | < 20             | cold        |
   | < 30             | warm        |
   | < 40             | hot         |
   | >= 40            | very hot    |*/

function convertToCelsius(tempF) {
  return (tempF - 30) / 2;
}

function describeTemperature(tempF) {
  const tempC = convertToCelsius(tempF);
  if (tempC >= 40) {
    return "very hot";
  } else if (tempC < 40 && tempC > 30) {
    return "hot";
  } else if (tempC <= 30 && tempC > 20) {
    return "warm";
  } else if (tempC <= 20 && tempC > 0) {
    return "cold";
  } else if (tempC <= 0) {
    return "very cold";
  }
}

console.log(describeTemperature(20));
