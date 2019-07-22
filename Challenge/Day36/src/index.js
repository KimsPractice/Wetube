import "./styles.css";

const API_URL = "https://api.coinpaprika.com/v1/tickers";

const loading = document.querySelector(".loading");
loading.innerText = "Loading..";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    data = data.sort((a, b) => a.rank - b.rank);
    const datas = data.slice(0, 10);

    datas.map(result => {
      const {
        name,
        quotes: {
          USD: { price }
        },
        rank
      } = result;
      const coinList = document.querySelector(".coinlist");
      const items = document.createElement("li");
      coinList.appendChild(items);
      items.innerText = `${rank} ${name} ${price}`;
      loading.innerText = "";
      console.log(rank, name, price);
    });
  });
