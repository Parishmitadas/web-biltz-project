const url =
	'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
	'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
	weatherFn('Pune');
});

async function weatherFn(cName) {
	const temp =
		`${url}?q=${cName}&appid=${apiKey}&units=metric`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

function weatherShowFn(data) {
	$('#city-name').text(data.name);
	$('#date').text(moment().
		format('MMMM Do YYYY, h:mm:ss a'));
	$('#temperature').
		html(`${data.main.temp}°C`);
	$('#description').
		text(data.weather[0].description);
	$('#wind-speed').
		html(`Wind Speed: ${data.wind.speed} m/s`);
	$('#weather-icon').
		attr('src',
			`...`);
	$('#weather-info').fadeIn();
}
const jokes = {
    clear sky: [
        "Why did the sun go to school? To get a little brighter!",
        "It's so hot outside, I just saw a squirrel fanning its nuts!"
    ],
    rainy: [
        "Why do cows lie down in the rain? To keep each udder dry!",
        "I tried to catch some fog, but I mist!"
    ],
    cloudy: [
        "Why did the cloud break up with the sun? It needed some space!",
        "I told a joke about clouds, but it went over everyone’s head!"
    ],
    default: [
        "Why don't mountains ever get tired? Because they peak all the time!"
    ]
};

function tellJoke(weather) {
    let jokeCategory = "default"; 

    if (weather.includes("clear")) jokeCategory = "sunny";
    else if (weather.includes("rain")) jokeCategory = "rainy";
    else if (weather.includes("cloud")) jokeCategory = "cloudy";

    let jokeList = jokes[jokeCategory];
    let randomJoke = jokeList[Math.floor(Math.random() * jokeList.length)];

    alert(randomJoke); // Display joke in an alert box
}


document.getElementById("bot").addEventListener("click", function () {
    let weatherCondition = document.getElementById("description").innerText; 
    tellJoke(weatherCondition.toLowerCase());
});