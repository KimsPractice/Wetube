const myCountry = document.querySelector(".jsCountry");
const myCity = document.querySelector(".jsCity");
const state = document.querySelector(".state");

const myLocate = () => {
  state.innerHTML = "<h1>Loading...</h1>";
  fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
      const { city, country } = data;
      myCountry.innerText = country;
      myCity.innerText = city;
      state.innerHTML = "<h1>Fetched!</h1>";
    })
    .catch(error => console.log(error));
};

window.onload = myLocate();
