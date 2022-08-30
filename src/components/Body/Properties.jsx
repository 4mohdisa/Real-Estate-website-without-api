import React from "react";
import classes from "./Properties.module.css";
import Property from "./Property";

function Properties({ properties }) {

  return (
    <div className={classes.grid}>
      {properties.map((property) => (
        <Property
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
}

export default Properties;
