import React, { useContext, useEffect, useState } from "react";
import classes from "./Property.module.css";
import Card from "../UI/Card";
import {
  HeartIcon,
  RectangleStackIcon,
  ServerIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import { DUMMY_USER_ID as uid } from "../../utility/data";
import { EstateContext } from "../../context/estate-context";

function Property({ property }) {
  const { setProperties } = useContext(EstateContext);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    setLikes(property.favourites);
    setHasLiked(likes.findIndex((like) => like === uid) !== -1);
  }, [likes, property.favourites]);


  const likeDislikeHandler = () => {
    if (hasLiked) {
      setProperties((prev) => [
        ...prev.map((item) =>
          item.id === property.id
            ? {
                ...item,
                favourites: item.favourites.filter((fav) => fav !== uid),
              }
            : { ...item }
        ),
      ]);
    } else {
      setProperties((prev) => [
        ...prev.map((item) =>
          item.id === property.id
            ? { ...item, favourites: [...item.favourites, uid] }
            : { ...item }
        ),
      ]);
    }
  };


  return (
    <Card>
      <img className={classes.image} src={property.image} alt="" />
      <div className={classes.absolute}>{property.houseType}</div>
      <div className={classes.dataContainer}>
        {/* 1st box */}
        <section className={classes.flexContainer}>
          <section className={classes.flexColumn}>
            <span className={classes.flexRow}>
              <h2>₹{property.price}</h2>
              <p>/month</p>
            </span>
            <h2>{property.name}</h2>
          </section>

          <section className={classes.favouriteIcon} onClick={likeDislikeHandler}>
            {hasLiked ? <HeartIconFilled /> : <HeartIcon />}
          </section>
        </section>

        <p className={classes.addressContainer}>
          {property.road}, {property.city}
        </p>

        <section className={classes.flexContainer}>
          <span className={classes.flexRow}>
            <RectangleStackIcon className={classes.smallIcons} />
            <p>{property.specification.bed}</p> <p>Beds</p>
          </span>

          <span className={classes.flexRow}>
            <ServerIcon className={classes.smallIcons} />
            <p>{property.specification.bathrooms}</p> <p>Bathrooms</p>
          </span>

          <span className={classes.flexRow}>
            <MapIcon className={classes.smallIcons} />
            <p>{property.specification.area}</p> <p>sq ft </p>
          </span>
        </section>
      </div>
    </Card>
  );
}

export default Property;
