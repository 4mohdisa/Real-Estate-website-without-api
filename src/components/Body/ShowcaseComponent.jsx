import React from "react";
import classes from "./ShowcaseComponent.module.css";
import Card from "../UI/Card";

function ShowcaseComponent({ properties }) {

  return (
    <div className={classes.grid}>
      {properties.map((property) => (
        <Card
          key={property.id}
          data={property}
        />
      ))}
    </div>
  );
}

export default ShowcaseComponent;
