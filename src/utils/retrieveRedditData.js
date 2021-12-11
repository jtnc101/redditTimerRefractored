import getAPIData from "../adapters/getAPIData";
import { startLoader, stopLoader } from "./imageLoader";

// retreiving Reddit api for top 500 posts of a subreddit.
// Reddit api limits to 100 retreival of posts. 
// Subsequent post must be retrieved looking up the returned 
// value of 'after' key. If data 1-100 was just retrieved, after will 
// the value of records 101 -200.

export async function retrieveRedditData(url, subreddit) {


   
    try {

        // startLoader();
        let data = await getAPIData(url);
        console.log(data);

        let after= data.data.after;

        const totalRecords = 500;
        const redditLimitPerCall = 100;

        let newURL;

        let d = data.data.children;

        for( let i=1; i< totalRecords/redditLimitPerCall; i++ ) {
            // newURL = `https://www.reddit.com/r/${match.params.id}/top.json?limit=100&t=year&after=${after}`;
            newURL = `https://www.reddit.com/r/${subreddit}/top.json?limit=100&t=year&after=${after}`;
            data = await getAPIData(newURL);

            d= [...d, ...data.data.children];

            after = data.data.after;
        }

        // stopLoader();
        
        return d;

    } catch (error) {
        console.log(error);
    }
}