import { useContext } from 'react'

import AppContext from "../context/AppContext";


export default function about() {
    const { posts } = useContext(AppContext);
    console.log("POSTS->", posts);
    
    return (
        <h1>About</h1>
    )
}
