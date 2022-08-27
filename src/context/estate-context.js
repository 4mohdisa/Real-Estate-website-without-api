import { createContext } from "react";

export const EstateContext = createContext({
    properties: [],
    setProperties: ()=>{},
    filter: {},
    setFilter: ()=>{},
})