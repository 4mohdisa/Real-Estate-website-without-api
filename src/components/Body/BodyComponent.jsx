import React from "react";
import classes from "./BodyComponent.module.css";
import SearchComponent from "./SearchComponent";
import ShowcaseComponent from "./ShowcaseComponent";
import { useContext } from "react";
import { EstateContext } from "../../context/estate-context";
import { isEmpty } from "../../utility/checkingFunctions";

function BodyComponent() {
  const { properties, filter } = useContext(EstateContext);



  const filteredProperties = isEmpty(filter) === true ? properties : properties.filter(property => property.city === filter.city);

  return (
    <div className={classes.mainBodyContainer}>
      <SearchComponent />
      <ShowcaseComponent properties={filteredProperties} />
    </div>
  );
}

export default BodyComponent;
