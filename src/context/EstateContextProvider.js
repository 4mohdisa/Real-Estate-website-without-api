import React, { useEffect, useState } from "react";
import { EstateContext } from "./estate-context";
import { rentData } from "../utility/data";

function EstateContextProvider({ children }) {
    const [properties, setProperties] = useState([]);
    const [filter, setFilter] = useState({});

    useEffect(() => {
      setProperties([...rentData]);
    }, [])
    

    const initialValue = {
        properties,
        setProperties,
        filter,
        setFilter,
    }
    
  return (
    <EstateContext.Provider value={initialValue}>
      {children}
    </EstateContext.Provider>
  );
}

export default EstateContextProvider;
