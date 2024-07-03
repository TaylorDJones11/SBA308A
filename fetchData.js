export async function fetchCountryData(countryName) {
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  const res = await fetch(finalURL);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const countryData = await res.json();
  return countryData;
}
