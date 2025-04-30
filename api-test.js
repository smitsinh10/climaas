const claveApi = '7146337fe3364a26ade51410253004'
const idioma ='es';
const ciudad = 'Huancayo'

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;
const response = await fetch(apiClimaActual);
let  data = await response.json();
console.log(data.current.condition);
