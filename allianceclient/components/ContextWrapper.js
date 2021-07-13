import { useState, useEffect } from "react";
/* URL ESTATICA */
import { BASE_PATH } from "../utils/constants";
/*Context*/
import AppContext from "../context/AppContext";


const API = `${BASE_PATH}/home-carrousel-banners`;

function ContextWrapper({ children }) {
    const [state, setState] = useState([]);
    const [posts, setPosts] = useState([]);


    useEffect(async () => {

        /*Get data*/
        const response = await fetch(API);
        const json = await response.json();
        setState(json);


        const response3 = await fetch(API);
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