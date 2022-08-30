import React, { useContext, useEffect, useState } from "react";
import { EstateContext } from "../../context/estate-context";
import { DUMMY_USER_ID as uid } from "../../utility/data";
import classes from "./Favourites.module.css";
import Properties from "./Properties";

function Favourites() {
  const { properties } = useContext(EstateContext);
  const [favouriteProperties, setFavouriteProperties] = useState([]);

  useEffect(() => {
    setFavouriteProperties(
      properties.filter((property) => property.favourites.includes(uid))
    );
  }, [properties]);

  return (
    <div className={classes.flexContainer}>
      {favouriteProperties.length < 1 ? (
        <h1 className={classes.center}> YOU DONT HAVE ANY FAVOURITES! </h1>
      ) : (
        <>
          <h1 className={classes.hHeader}>Your favourite properties</h1>
          <Properties properties={favouriteProperties} />
        </>
      )}
    </div>
  );
}

export default Favourites;
