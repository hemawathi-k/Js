async function wapp(location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f6a3011027de444aa6521129242707&q=${location}`);
    
  
    if (!response.ok) {
      throw new Error('Invalid location');
    }
    
    const data = await response.json();
    console.log(data);

    document.getElementById('day').innerText = new Date(data.location.localtime).toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById('date').innerText = new Date(data.location.localtime).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementsByClassName('icon')[0].innerHTML = `<img src="${data.current.condition.icon}" alt="${data.current.condition.text}">`;
    document.getElementById('temp').innerText = `${data.current.temp_c} °C`;
    document.getElementById('climate').innerText = data.current.condition.text;

    document.getElementById('name').innerText = data.location.name;
    document.getElementById('Temp').innerText = `${data.current.temp_c} °C`;
    document.getElementById('humidity').innerText = `${data.current.humidity}%`;
    document.getElementById('ws').innerText = `${data.current.wind_kph} kph`;
    document.getElementsByClassName('icon')[1].innerHTML = `<img src="${data.current.condition.icon}" alt="${data.current.condition.text}">`;

  
    document.getElementById('error-message').style.display = 'none';

  } catch (error) {
    console.error('Error fetching weather data:', error);

    
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('error-message').innerText = 'Invalid location. Please enter a valid country/city name.';
  }
}

document.getElementById('search-btn').addEventListener('click', () => {
  const cityInput = document.getElementById('city-input');
  const location = cityInput.value.trim();
  const errorMessage = document.getElementById('error-message');

  if (!location) {
    errorMessage.style.display = 'block';
    errorMessage.innerText = 'Please enter a valid location.';
  } else {
    wapp(location);
  }
});

window.onload = () => {
  wapp('Chennai');
};
