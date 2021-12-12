
import React from 'react';
import SearchBarCSS from '../../styles/search/SearchBar.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { SubredditContext } from './SubredditContext';
import { SubredditContext } from '../../contexts/SubredditContext';
import { useContext } from 'react';

const SearchBar = ({match}) => {
    

    const [ search, setSearch ] = useState("");
    const [ subreddit, setSubreddit ] = useContext(SubredditContext);
    const navigate = useNavigate();
    // const appName = "reddit-timer";

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubreddit(search);
        
        // history.push(`/${appName}/search/${ search }`);
        console.log( search);
        // navigate.push(`/search/${ search }`);
    }

    return (
        <div  >
            {/* <div >subreddit : { subreddit } </div> */}
            <form className={SearchBarCSS.container} onSubmit={ handleSubmit }>
                <span >r /</span>
                <input 
                    type="text" 
// placeholder={ match.params.id}
                    className={SearchBarCSS.textField}
                    value={search}
                    onChange={ (e) => setSearch(e.target.value) } 
                />
                <button type="submit" className={SearchBarCSS.searchButton}>SEARCH</button>
            </form>
        </div>
    );
}

export default SearchBar;