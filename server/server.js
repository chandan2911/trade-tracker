const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const { default: axios } = require("axios");
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
//getting all the coins from the api
app.get("/coins/all/", async (req, res) => {
  const { time, currency, orderby, orderdirection } = req.headers;
  try {
    const response = await axios.get(`${process.env.COIN_API_URL}`, {
      params: {
        referenceCurrencyUuid: currency,
        offset: 1,
        timePeriod: time,
        orderBy: orderby,
        orderDirection: orderdirection,
      },
      headers: {
        "x-access-token": `${process.env.COIN_API_KEY}`,
      },
    });

    res.status(200).send(response.data.data.coins);
  } catch {
    res.status(400).send("ERROR 404");
  }
});
//getting trending coins from the api
app.get("/coins/trending/", async (req, res) => {
  const { time, currency, orderby, orderdirection, offset } = req.headers;
  try {
    const response = await axios.get(`${process.env.COIN_API_URL}`, {
      params: {
        referenceCurrencyUuid: currency,
        offset: offset,
        timePeriod: time,
        orderBy: orderby,
        orderDirection: orderdirection,
        limit: 6,
      },
      headers: {
        "x-access-token": `${process.env.COIN_API_KEY}`,
      },
    });

    res.status(200).send(response.data.data.coins);
  } catch {
    res.status(400).send("ERROR 404");
  }
});
//getting single Coin from the api
app.get("/coin/single/", async (req, res) => {
  const { uuid, currency, time } = req.headers;
  try {
    const response = await axios.get(`${process.env.SINGLE_API_URL}/${uuid}`, {
      params: {
        referenceCurrencyUuid: currency,
        timePeriod: time,
      },
      headers: {
        "x-access-token": `${process.env.COIN_API_KEY}`,
      },
    });

    res.status(200).send(response.data);
  } catch {
    res.status(400).send("ERROR 404").status(400);
  }
});

//getting coin histroy from the api

app.get("/coin/single/histroy", async (req, res) => {
  const { uuid, currency, time } = req.headers;

  try {
    const response = await axios.get(
      `${process.env.SINGLE_API_URL}/${uuid}/history`,
      {
        params: {
          referenceCurrencyUuid: currency,
          timePeriod: time,
        },
        headers: {
          "x-access-token": `${process.env.COIN_API_KEY}`,
        },
      }
    );

    res.status(200).send(response.data);
  } catch {
    res.status(400).send("ERROR 404");
  }
});
//search the coin by name
app.get("/coin/search/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(
      `https://api.coinranking.com/v2/search-suggestions?query=${id}`,
      {
        headers: {
          "x-access-token": `${process.env.COIN_API_KEY}`,
        },
      }
    );

    res.status(200).send(response.data.data);
  } catch {
    res.status(400).send("ERROR 404");
  }
});
