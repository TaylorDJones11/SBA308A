export function renderTimezones(countryData) {
  let result = document.getElementById('result');
  result.innerHTML += `
    <div class="wrapper">
      <div class="data-wrapper">
        <h4>Timezones:</h4>
        <span>${countryData[0].timezones.join(', ')}</span>
      </div>
    </div>
  `;
}

export function displayCountryData(countryData) {
  let result = document.getElementById('result');
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
          countryData[0].currencies[Object.keys(countryData[0].currencies)].name
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
    <div id="timezones"></div>
  `;
}

export function displayError(message) {
  let result = document.getElementById('result');
  result.innerHTML = `<h3>${message}</h3>`;
}
