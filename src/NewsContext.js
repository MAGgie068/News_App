import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = 'cdcd0b5757f0440299a7c86ba70c220ad';


    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
        ).then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, [data]);

    return (
        <NewsContext.Provider value={{ data }}>
            {props.children}
        </NewsContext.Provider>
    );
};