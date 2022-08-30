import React from "react";
import classes from "./SearchBar.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import { useContext } from "react";
import { EstateContext } from "../../context/estate-context";
import { isEmpty } from "../../utility/checkingFunctions";

function SearchBar() {
  const { setFilter, filter } = useContext(EstateContext);
  const [city, setCity] = useState('Pune');
  const [date, setDate] = useState('2099-12-12');
  const [price, setPrice] = useState(5000);
  const [houses, setHouses] = useState('Houses');

  const submitFilterHandler = () => {
    setFilter({
      city: city,
      date: date,
      price: {
        lowerLim: +price,
        upperLim: +price === 15000 ? 999999 : 5000 + +price,
      },
      houseType: houses,
    });
  };

  const resetFilter = () => {
    setFilter({});
  };

  return (
    <div className={classes.flexContainer}>
      <section className={classes.sectionContainer}>
        <label>Location</label>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="Pune"> India, Pune</option>
          <option value="Bengaluru"> India, Bengaluru</option>
          <option value="Siliguri"> India, Siliguri</option>
        </select>
      </section>

      <section className={classes.sectionContainer}>
        <label>When</label>
        <input
          type="date"
          placeholder="Select Move-in Data"
          onChange={(e) => setDate(e.target.value)}
        />
      </section>

      <section className={classes.sectionContainer}>
        <label>Price</label>
        <select onChange={(e) => setPrice(e.target.value)}>
          <option value="0">Less than ₹.5000</option>
          <option value="5000"> ₹.5000 - ₹.10000</option>
          <option value="10000"> ₹.10000 - ₹.15000 </option>
          <option value="15000"> More than ₹.15000 </option>
        </select>
      </section>

      <section className={classes.sectionContainer}>
        <label>Property Type</label>
        <select onChange={(e) => setHouses(e.target.value)}>
          <option value="Houses">Houses</option>
          <option value="Bungalow"> Bungalow</option>
          <option value="Flat"> Flat</option>
        </select>
      </section>

      <section className={classes.sectionContainer}>
        <Button styling={"highlightButton"} onClick={submitFilterHandler}>
          Search
        </Button>
        {isEmpty(filter)===false && (
          <Button styling={"defaultButton"} onClick={resetFilter}>
            Clear all filter
          </Button>
        )}
      </section>
    </div>
  );
}

export default SearchBar;
