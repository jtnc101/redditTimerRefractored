import React from 'react';
import SearchCSS from '../styles/search/Search.module.css';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import HeatMap from '../components/search-page/HeatMap';
import { RedditDataProvider } from '../contexts/RedditDataContext';
import { SubredditProvider} from '../contexts/SubredditContext';
import { CellProvider } from '../contexts/CellContext';
import Posts from '../components/search-page/Posts';


import SearchBar from '../components/search-page/SearchBar';

const SearchPage = ( {match} ) => {

    return (
        <div>
            <Header />
            <div className={SearchCSS.title}>Find the best time for a subreddit</div>
            <SubredditProvider >
                <SearchBar match={match} />
                <RedditDataProvider >
                    <CellProvider>
                        <HeatMap />
                        <Posts />
                    </CellProvider>
                </RedditDataProvider>

            </SubredditProvider>
            <Footer />
        </div>
    );
}

export default SearchPage;