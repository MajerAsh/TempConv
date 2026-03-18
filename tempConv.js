// tempConv.js
/*2. Write a function named `convertToCelsius` which takes a temperature
 in Fahrenheit and returns the equivalent temperature in Celsius.*/

function convertToCelsius(tempF) {
  return (tempF - 30) / 2;
}
console.log(convertToCelsius(32));

/*3. Write a function named `describeTemperature` which takes a temperature in Fahrenheit and returns a description according to this table:

   | Temperature (°C) | Description |
   | ---------------- | ----------- |
   | < 0              | very cold   |
   | < 20             | cold        |
   | < 30             | warm        |
   | < 40             | hot         |
   | >= 40            | very hot    |*/
