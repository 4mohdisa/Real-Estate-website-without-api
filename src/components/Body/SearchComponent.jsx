import React from "react";
import classes from "./SearchComponent.module.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import SearchBar from "./SearchBar";

function SearchComponent() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className={classes.flexContainer}>
      <div className={classes.upperContainer}>
        <h1>Search properties to rent</h1>
        <section
          className={classes.flexbox}
          onClick={() => setShowSearchBar((prev) => !prev)}
        >
          <p>Search with Search Bar</p>
          <span className={classes.icon}>
            {showSearchBar ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </span>
        </section>
      </div>

      {showSearchBar && <SearchBar />}
    </div>
  );
}

export default SearchComponent;
