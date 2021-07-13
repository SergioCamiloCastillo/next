


import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext({});
import { BASE_PATH } from "../../utils/constants";


export const CountProvider = ({ children }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`${BASE_PATH}/homepage`).then(response => response.json()).then(
            result => setData(result)
        )
    }, [setData]);
    return (
        <Context.Provider value={{ data }}>
            {children}
        </Context.Provider>
    );
};

export function useCount() {
    return useContext(Context);
}
//Engloba todos los componentes donde le vayamos a pasar el context

/*import { createContext, useContext, useEffect, useState } from 'react';

const HomepageContext = createContext();

export function HomepageContextProvider({ children }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:1337/homepage").then(response => response.json()).then(
            result => setData(result)
        )
    }, [setData]);
    return (
        <HomepageContext.Provider value={{data}}>
            {children}

        </HomepageContext.Provider>
    );
}

export function useHomepageContext() {
    return useContext(HomepageContext);
}*/