import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import {
  HeartIcon,
  RectangleStackIcon,
  ServerIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import { DUMMY_USER_ID as uid } from "../../utility/data";

function Card({ data }) {
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  

  useEffect(()=> {
    setLikes(data.favourites);
    setHasLiked(likes.findIndex(like => like === uid ) !== -1);
  }, [likes, data.favourites]);
  

  const likeProperty = () => {
    if(hasLiked) {
      setHasLiked(false);
      data.favourites = data.favourites.filter(fav => fav !== uid );
    }
    else {
      setHasLiked(true);
      data.favourites.push(uid);
    }

  }

  return (
    <div className={styles.cardContainer}>
      <img src={data.image} alt="" />
      <div className={styles.absolute}>{data.houseType}</div>
      <div className={styles.dataContainer}>
        {/* 1st box */}
        <section className={styles.flexContainer}>
          <section className={styles.flexColumn}>
            <span className={styles.flexRow}>
              <h2>₹{data.price}</h2>
              <p>/month</p>
            </span>
            <h2>{data.name}</h2>
          </section>

          <section className={styles.favouriteIcon} onClick={likeProperty}>
            {hasLiked ? <HeartIconFilled /> : <HeartIcon />}
            
          </section>
        </section>

        <p className={styles.addressContainer}>
          {data.road}, {data.city}
        </p>

        <section className={styles.flexContainer}>
          <span className={styles.flexRow}>
            <RectangleStackIcon className={styles.smallIcons}/>
            <p>{data.specification.bed}</p> <p>Beds</p>
          </span>

          <span className={styles.flexRow}>
            <ServerIcon className={styles.smallIcons}/>
            <p>{data.specification.bathrooms}</p> <p>Bathrooms</p>
          </span>

          <span className={styles.flexRow}>
            <MapIcon className={styles.smallIcons}/>
            <p>{data.specification.area}</p> <p>sq ft </p>
          </span>
        </section>
      </div>
    </div>
  );
}

export default Card;
