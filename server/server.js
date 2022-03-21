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

  console.log(orderby, orderdirection, currency, time);
  try {
    const response = await axios.get(`${process.env.COIN_API_URL}`, {
      params: {
        referenceCurrencyUuid: currency,
        timePeriod: time,
        orderBy: orderby,
        orderDirection: orderdirection,
      },
      headers: {
        "x-access-token": `${process.env.COIN_API_KEY}`,
      },
    });

    res.send(response.data.data.coins);
  } catch {
    res.send("ERROR 404");
  }
});
//getting single Coin from the api
app.get("/coin/single/", async (req, res) => {
  const { uuid, currency, time } = req.headers;
  console.log("Hello");
  console.log(uuid, currency, time);

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

    res.send(response.data);
  } catch {
    res.send("ERROR 404");
  }
});

//getting coin histroy from the api

app.get("/coin/single/histroy", async (req, res) => {
  const { uuid, currency, time } = req.headers;
  console.log("Hello");
  console.log(uuid, currency, time);

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

    res.send(response.data);
  } catch {
    res.send("ERROR 404");
  }
});
