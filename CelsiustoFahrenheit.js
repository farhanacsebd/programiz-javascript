function CelsiustoFahrenheit(celcius){
    let fahrenheit = celcius * 1.8 + 32;
    return fahrenheit;  
}

let celciusIs = 40;
console.log(CelsiustoFahrenheit(celciusIs));