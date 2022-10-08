import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../App";
import axios from "axios";
import "./coin.css";
import Typography from "@mui/material/Typography";
import ReactHtmlParser from 'react-html-parser'

const Coin = () => {
  const { id } = useParams();
  const { currency } = useContext(AppContext);
  const [coin, setcoin] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    fetchCoin();
    setTimeout(() => setisLoading(false), 1000);
    console.log(coin);
  }, [currency]);

  const fetchCoin = () => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((res) => {
      setcoin(res.data);
    });
  };
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="coinData">
          <img src={coin?.image?.large} alt={coin?.name} className="coinImg" />

          <Typography variant="h1" component="h2">
            {coin?.name}
          </Typography>
          <Typography variant="p" component="p">
            {ReactHtmlParser(coin?.description?.en.split('. '))[0]}
          </Typography>
        </div>
      )}
    </>
  );
};

export default Coin;
