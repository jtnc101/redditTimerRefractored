// take redditData and process it into a 2d heat map. Indices of each cell
// corresponds to day of the week and hour. The value of the cell is the total count
// of posts made in that hour frame.

import { get2DZeroArray } from "./get2DZeroArray";
// import { RedditDataContext } from "../contexts/RedditDataContext";
// import { useContext } from "react";

export function processHeatMap (redditData) {

    //const { redditData, setRedditData } = useContext( RedditDataContext );
    const numOfRows = 7;
    const numOfColumns = 24;

    let heatMapSubstitute = get2DZeroArray(numOfRows, numOfColumns);
    try {
        for( let i= 0; i < 500; i++ ) {

            let utcTime = redditData[i].data.created_utc;
            let date = new Date(utcTime*1000);
            let day = date.getDay();
            let hour = date.getHours();

            heatMapSubstitute[day][hour] += 1;
        }
    }   
    catch(e) {
        console.log(e);
    }

    return( heatMapSubstitute );

}