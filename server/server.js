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

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${process.env.COIN_API_URL}`, {
      params: {
        timePeriod: "7d",
        limit: "100",
        sparkline: "false",
      },
      headers: {
        "x-access-token": `${process.env.COIN_API_KEY}`,
      },
    });
    res.send(response.data);
  } catch {
    res.status(500).send("Error");
  }
});
//
app.get("/currency", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coinranking.com/v2/reference-currencies",
      {
        params: {
          type: "fiat",
          limit: "100",
        },
        headers: {
          "x-access-token": `${process.env.COIN_API_KEY}`,
        },
      }
    );
    res.send(response.data);
  } catch {
    res.status(500).send("Error");
  }
});
