const select = document.querySelector('select');

async function weather() {
  const location = select.value || 'chennai';
  try {
    const response = await fetch(`https://www.metaweather.com/api/location/search/?query=${location}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

select.addEventListener('change', weather);
