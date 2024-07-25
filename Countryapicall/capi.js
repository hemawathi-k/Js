document.addEventListener('DOMContentLoaded', () => {
  const selectCountry = document.querySelector('#countrySelect');
  const submitBtn = document.querySelector('#submitBtn');
  const message = document.querySelector('#message');

  async function countryName() {
    try {
      const retrieve = await fetch("https://restcountries.com/v3.1/all");
      const apiData = await retrieve.json();
      let arr = [];
      for (let a of apiData) {
        arr.push(a.name.common);
      }
      arr = arr.sort();
      const countryArr = [];
      for (let i of arr) {
        const country = document.createElement('option');
        country.value = i;
        country.innerHTML = i;
        countryArr.push(country);
      }
      selectCountry.append(...countryArr);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  }

  countryName();

  submitBtn.addEventListener('click', () => {
    const selectedCountry = selectCountry.value;
    if (selectedCountry === "") {
      message.textContent = 'Error: Please select a country.';
      message.style.color = 'red';
    } else {
      message.textContent = `You selected: ${selectedCountry}`;
      message.style.color = 'green';
    }
  });
});
