let searchBtn = document.getElementById('search-btn');
let countryInput = document.getElementById('country-input');

searchBtn.addEventListener('click', async () => {
  let countryName = countryInput.value;
  let result = document.getElementById('result');

  try {
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    const res = await fetch(finalURL);
    const countryData = await res.json();
    console.log(countryData);
    console.log(countryData[0]);
    console.log(countryData[0].capital);
    console.log(countryData[0].flags.svg);
    console.log(countryData[0].name.common);
    console.log(countryData[0].continents[0]);
    console.log(Object.keys(countryData[0].currencies)[0]);
    console.log(
      countryData[0].currencies[Object.keys(countryData[0].currencies)].name
    );
    console.log(
      Object.values(countryData[0].languages).toString().split(',').join(', ')
    );
    result.innerHTML = `
  <img src="${countryData[0].flags.svg}" class="flag-img">
`;
  } catch (error) {
    console.log(error);
  }
});
