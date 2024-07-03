import { renderTimezones, displayCountryData, displayError } from './dom.js';
import { fetchCountryData } from './fetchData.js';

let searchBtn = document.getElementById('search-btn');
let countryInput = document.getElementById('country-input');

searchBtn.addEventListener('click', async () => {
  let countryName = countryInput.value;
  let result = document.getElementById('result');

  try {
    const countryData = await fetchCountryData(countryName);
    displayCountryData(countryData);
  } catch (error) {
    if (countryName.length === 0) {
      displayError('The input field cannot be empty');
    } else {
      displayError('Please enter a valid country name.');
    }
  }

  countryName = '';
});

let currentTimeBtn = document.getElementById('darkmode-btn');
currentTimeBtn.addEventListener('click', async () => {
  let countryName = countryInput.value;

  try {
    const countryData = await fetchCountryData(countryName);
    renderTimezones(countryData);
  } catch (error) {
    console.error('Error fetching country data:', error);
  }

  countryName = '';
});
