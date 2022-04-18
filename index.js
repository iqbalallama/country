const getCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCounty(data))
}
getCountry();

const displayCounty = (countries) =>{
    console.log(countries)
    const main = document.getElementById('main');
    countries.forEach( country => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img style="height: 200px" src="${country.flags.png}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${country.name.common}</h5>
          <p class="card-text">${country.capital}</p>
          <button onclick="show('${country.name.common}')">Show Details</button>
        </div>
      </div>
        `
        main.appendChild(div);
    })
}

const show = (name) =>{
    console.log(name)
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => detailsCountry(data[0]))
}
const detailsCountry = country =>{
    const detail = document.getElementById('country-detail');
    console.log(country);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mb-3">
    <img src="${country.flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Name: ${country.name.common}</h5>
      <p class="card-text">Capital:${country.capital}</p>
      <p class="card-text">Population:${country.population}</p>
      <p class="card-text">Region:${country.region}</p>
      <p class="card-text">Time Zones:${country.timezones}</p>
      
    </div>
  </div>
    `;
    detail.appendChild(div);
}