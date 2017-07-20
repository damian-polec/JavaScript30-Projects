const url = 'https://restcountries.eu/rest/v2/all';

const countries = [];

fetch(url)
    .then(blob => blob.json())
    .then(data => countries.push(...data))

function findMatches(wordToMatch, countries) {
    return countries.filter(place =>{
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.capital.match(regex)
        });
}

function displayMatches() {
    const matchArray = findMatches(this.value, countries);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const countryName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);
        const capitalName = place.capital.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${countryName}, ${capitalName}</span>
                <span class="population">${place.population}</span>
            </li>
        `}).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);