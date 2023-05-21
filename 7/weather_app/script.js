/**Create a mini project with Weather Forecast API

Create a minimal weather interface in HTML/CSS & Javascript
Get the weather datas that interest you the most (Eg. Temperature, Humidity, Wind...)
Feel free to be creative (Eg. Change background color or image depending current datas from API)
Link to the API


1. we are using geocoding api to find latitude ans longitude
2. We use results of first API call to get temperature back in our second api call*/

const apiURLTemp = "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m";
const apiUrLoc = "https://geocoding-api.open-meteo.com/v1/search?count=1&language=en&format=json&name=";

const cityInput = document.querySelector('input[type="search"]');
const h2output = document.querySelector("h2");

cityInput.addEventListener("change", e=>{
    console.log(e.target.value);
    fetch(apiUrLoc + e.target.value)
    .then(response => response.json())
    .then(data => console.log(data.result));
    /* do sth with json data*/
    /* we check that data.results is not undefined*/
    /* we get latitude and longitute*/
    if(typeof(data.results)!=="undefined"){
        let lat = data.results[0].latitude;
        let long = data.results[0].longitude;
        console.log(lat,long);


        fetch(`${apiURLTemp}&latitude=${lat}&longitude=${long}`)
        .then(response => response.json())
        .then(data =>{
            h2output.textContent = `the current weather in  ${e.target.value} is ${data.current_weather.temperature}C`;
            


        })
    }
});