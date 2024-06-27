let searchBtn = document.getElementById('search-btn');
let countryInput = document.getElementById('country-input');

searchBtn.addEventListener('click', async () => {
  let countryName = countryInput.value;
  let result = document.getElementById('result');

  try {
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    const res = await fetch(finalURL);
    const countryData = await res.json();

    result.innerHTML = `
  <img src="${countryData[0].flags.svg}" class="flag-img">
    <h2>${countryData[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${countryData[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${countryData[0].continents[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${countryData[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${
                  countryData[0].currencies[
                    Object.keys(countryData[0].currencies)
                  ].name
                } - ${Object.keys(countryData[0].currencies)[0]}  </span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(countryData[0].languages)
                  .toString()
                  .split(',')
                  .join(', ')}</span>
            </div>
        </div>



`;
  } catch (error) {
    if (countryName.length === 0) {
      result.innerHTML = `
        <h3>The input field cannot be empty</h3>
        `;
    } else {
      result.innerHTML = `
        <h3>Please enter a valid country name.</h3>
        `;
    }
  }

  countryName = '';
});
