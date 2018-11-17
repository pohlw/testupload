document.addEventListener('DOMContentLoaded',getWeather);

function getWeather(){
    getWeather.getWeather()
    .then(resuls => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}

document.addEventListener('DOMContentLoaded',getWeather);
