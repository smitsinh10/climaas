const claveApi = 'TU_API_KEY_AQUI'; // ← pon aquí tu clave de WeatherAPI
const ciudad = 'Lima'; // Puedes cambiarlo por cualquier ciudad
const idioma = 'es';

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

fetch(apiClimaActual)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error obteniendo el clima:', error);
    });
