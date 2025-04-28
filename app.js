const claveApi = 'TU_API_KEY_AQUI'; // ← pon tu API Key real
const idioma = 'es';

function buscarClima() {
    const ciudad = document.getElementById('input-ciudad').value.trim();

    if (ciudad === '') {
        alert('Por favor escribe una ciudad');
        return;
    }

    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

    fetch(apiClimaActual)
        .then(response => response.json())
        .then(data => mostrarClima(data))
        .catch(error => {
            console.error(error);
            alert('No se pudo obtener la información del clima.');
        });
}

function mostrarClima(data) {
    const climaInfo = document.getElementById('clima-info');
    climaInfo.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <img src="https:${data.current.condition.icon}" alt="Clima">
        <p>Condición: ${data.current.condition.text}</p>
        <p>Temperatura: ${data.current.temp_c} °C</p>
        <p>Humedad: ${data.current.humidity} %</p>
        <p>Viento: ${data.current.wind_kph} km/h</p>
    `;
}
