var satelite = document.querySelector('#satelite')
var radar1 = document.querySelector('#radar1')
var radar2 = document.querySelector('#radar2')
var buscar = document.querySelector('#buscar')

var fetchdata = position =>{
    var { latitudes , longitudes} = position, coords;

    if(navigator.geolocation.position){
        navigator.geolocation.getCurrentPosition(position);
        var latitudes = "latitudes";
        var longitudes = "longitudes";
        console.log(position);
    }

    fetch('https://api.openweathermap.org/data/2.5/weather?q=santo domingo&lang=es&units=metric&appid=fa2e3c48eec3ba1a664043b2789f2fe1')

    .then(resp => resp.json())
    .then(data => console.log(data))
}

var onload = () =>{
    navigator.geolocation.getCurrentPosition(fetchdata);
}


