import { useState, useEffect } from "react";


/*Context*/
import AppContext from "../context/AppContext";

/*const initialState = {
    data:[],
};*/


const API_FAKE = "http://localhost:1337/home-carrousel-banners";

function ContextWrapper({ children }) {
    const [state, setState] = useState([]);
    const [posts, setPosts] = useState([]);


    useEffect(async () => {

        /*Get data*/
        const response = await fetch(API_FAKE);
        const json = await response.json();
        setState(json);


        const response3 = await fetch(API_FAKE);
        const json3 = await response3.json();
        setPosts(json3);

    }, []);


    return (
        <AppContext.Provider value={{ state, posts }}>
            {children}
        </AppContext.Provider>
    );
}

export default ContextWrapper;