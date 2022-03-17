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
app.get("/coin/all/", async (req, res) => {
  const currency = req.headers.currency;
  try {
    const response = await axios.get(`${process.env.COIN_API_URL}`, {
      params: {
        timePeriod: "7d",
        limit: "100",
        referenceCurrencyUuid: currency,
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
//
