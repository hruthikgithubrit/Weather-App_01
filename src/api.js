const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b6c194563msh5ae404932dbbe12p168ec4jsn93315347d485',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL =  "https://wft-geo-db.p.rapidapi.com/v1/geo"

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/"

export const WEATHER_API_KEY  = "f5621f69cd896f35ff1759a506c8fb03"

try {
	const response = await fetch('/cities', geoApiOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}