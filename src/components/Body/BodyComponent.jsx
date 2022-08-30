import React from "react";
import classes from "./BodyComponent.module.css";
import SearchComponent from "./SearchComponent";
import { useContext } from "react";
import { EstateContext } from "../../context/estate-context";
import { isEmpty } from "../../utility/checkingFunctions";
import Properties from "./Properties";

function BodyComponent() {
  const { properties, filter } = useContext(EstateContext);
  console.log(properties);

  const filteredProperties =
    isEmpty(filter) === true
      ? properties
      : properties.filter(
          (property) =>
            property.city === filter.city &&
            +property.price >= filter.price.lowerLim &&
            +property.price <= filter.price.upperLim &&
            property.houseType?.toLowerCase() === filter.houseType.toLowerCase() &&
            new Date(property.availablity) < new Date(filter.date)
        );

  return (
    <div className={classes.mainBodyContainer}>
      <SearchComponent />
      <Properties properties={filteredProperties} />
      {filteredProperties.length < 1 && <h1 className={classes.entireDisplayText}>No Search result found</h1>}
    </div>
  );
}

export default BodyComponent;
