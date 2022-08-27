import { useState } from "react";
import classes from "./App.module.css";
import FooterComponent from "./components/Footer/FooterComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Route, Routes, Navigate } from "react-router-dom";
import RentPage from "./pages/RentPage";
import FavouritePage from "./pages/FavouritePage";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggleHandler = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "light" : "light"
    );
  };

  return (
    <div className={classes.app} data-theme={theme}>
      <div className={classes.positionFixed} onClick={themeToggleHandler}>
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </div>
      
      <HeaderComponent />
      <Routes>
        <Route exact path="/" element={<Navigate to="/rent"/>} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
