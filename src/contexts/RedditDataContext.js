import React, { createContext,useState } from "react";

export const RedditDataContext = createContext();

export const RedditDataProvider = (props) => {

    const [redditData, setRedditData] = useState([]);

    return (
        <RedditDataContext.Provider value={[redditData, setRedditData]}>
            {props.children}
        </RedditDataContext.Provider>
    );
}