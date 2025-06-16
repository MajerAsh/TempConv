prompt("Enter a temperature in degrees fahrenheit.");

function convertToCelsius(TempF) {
  let TempC = ((TempF - 32) * 5) / 9;
  return TempC;
}

function describeTemperature(TempF) {
  const TempC = convertToCelsius(TempF);

  if (TempC < 0) {
    description = "very cold";
  } else if (TempC < 20) {
    description = "cold";
  } else if (TempC < 30) {
    description = "warm";
  } else if (TempC < 40) {
    description = "hot";
  } else if (TempC >= 40) {
    description = "very hot";
  }
  alert(`${TempF} degrees fahrenheit is ${TempC} degrees celsius, 
 which is considered to be ${description}.`);
}
console.log(describeTemperature(30));
