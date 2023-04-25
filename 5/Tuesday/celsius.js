function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let message = "The temperature is " + toCelsius(77) + " Celsius";
  
  console.log(message)