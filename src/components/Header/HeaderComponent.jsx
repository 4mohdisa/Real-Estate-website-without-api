import React from "react";
import classes from "./HeaderComponent.module.css";
import { Bars3Icon, HomeIcon } from "@heroicons/react/24/solid";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";

function HeaderComponent() {
  return (
    <div className={classes.header}>
      
      <span className={classes.logo}>
        <HomeIcon className={classes.icon} />
        <h1>Estatery</h1>
      </span>

      <span className={classes.navbar}>
        <Bars3Icon className={`${classes.icon} ${classes.hamburgerMenu}`} />

        <section className={classes.propertyOptions}>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    backgroundColor: "var(--highlightColor2)",
                    color: "var(--highlightColor)",
                  }
                : {};
            }}
            to="/rent"
          >
            Rent
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    backgroundColor: "var(--highlightColor2)",
                    color: "var(--highlightColor)",
                  }
                : {};
            }}
            to="/favourite"
          >
            Favourites
          </NavLink>

        </section>


        <section className={classes.loginButtons}>
          <Button styling={"defaultButton"}>Login</Button>
          <Button styling={"highlightButton"}>Sign up</Button>
        </section>


      </span>
    </div>
  );
}

export default HeaderComponent;
