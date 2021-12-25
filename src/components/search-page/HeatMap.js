import React from 'react';
import HeatMapCSS from '../../styles/search/HeatMap.module.css';
import { RedditDataContext } from '../../contexts/RedditDataContext';
import { useContext, useEffect,useState } from 'react';
import { SubredditContext } from '../../contexts/SubredditContext';
import { CellContext } from '../../contexts/CellContext';
import '../../styles/search/heatMap.css';
import { retrieveRedditData } from '../../utils/retrieveRedditData';
import { get2DZeroArray } from '../../utils/get2DZeroArray';
import { startLoader, stopLoader } from '../../utils/imageLoader';
import { processHeatMap } from '../../utils/processHeatMap';

const HeatMap = () => {

    const [redditData, setRedditData] = useContext(RedditDataContext);
    const [subreddit, setSubreddit] = useContext(SubredditContext);
    const [cell, setCell] = useContext(CellContext);

    let row = new Array(24);
    row.fill(0);

    const numOfRows = 7;
    const numOfColumns = 24;
    const [heatMap, setHeatMap ] = useState( get2DZeroArray(numOfRows, numOfColumns));

    const url = `https://www.reddit.com/r/${subreddit}/top.json?limit=100&t=year`;

    const retrieveAPIData = async () => {

        setCell([]);
        startLoader();
        setRedditData( await retrieveRedditData(url, subreddit));
        stopLoader();
    }

    const updateHeatMap = () => {
        setHeatMap( processHeatMap(redditData));
    }
    useEffect( ()=> {
        retrieveAPIData();     
    }, [subreddit]);

    useEffect ( () => {
        updateHeatMap();
    }, [redditData]);


    return(

        <div className={HeatMapCSS.container} >
            <div id='loader' className={HeatMapCSS.loader}/>
            <table id='table' className={HeatMapCSS.table} cellSpacing="0">
                <tr className={HeatMapCSS.headerRow}>
                    <th colSpan="4" />
                    <th colSpan="2" className={HeatMapCSS.timeHeader}>12:00am</th>
                    <th colSpan="2" className={HeatMapCSS.timeHeader}>2:00am</th>
                    <th colSpan="2" className={HeatMapCSS.timeHeader}>4:00am</th>
                    <th colSpan="2" className={HeatMapCSS.timeHeader}>6:00am</th>
                    <th colSpan="2" className={HeatMapCSS.timeHeader}>8:00am</th>
                    <th colSpan="2" className={HeatMapCSS.timeHeader}>10:00am</th>
                    <th colSpan="2" className={HeatMapCSS.timeHeader}>12:00pm</th>
                    <th colSpan="2" className={HeatMapCSS.timeHeader}>2:00pm</th>
                    <th colSpan="2" className={HeatMapCSS.timeHeader}>4:00pm</th>
                    <th colSpan="2" className={HeatMapCSS.timeHeader}>6:00pm</th>
                    <th colSpan="2" className={HeatMapCSS.timeHeader}>8:00pm</th>
                    <th colSpan="2" className={HeatMapCSS.timeHeader}>10:00pm</th>
                </tr>
                <tr >
                    <td colSpan="4" className={HeatMapCSS.tdWeekday}>Sunday</td>
                    { row.map( (item,index) => 
                        <td 
                            id={index}
                            onClick={ () => setCell( [0,index,heatMap[0][index]])}
                            className={ "tdHourEntry " + ((heatMap[0][index] >= 10)? 'element10' : `element${heatMap[0][index] } `)}
                        >

                            {heatMap[0][index]}
                        
                        </td> )}
                </tr>

                <tr >
                    <td colSpan="4" className={HeatMapCSS.tdWeekday}>Monday</td>
                    { row.map( (item,index) => 
                        <td 
                            id={index}
                            onClick={ () => setCell( [1,index,heatMap[1][index] ] )}
                            className={ "tdHourEntry " + ((heatMap[1][index] >= 10)? 'element10' : `element${heatMap[1][index] } `)}  
                        >

                            {heatMap[1][index]}

                        </td> )}
                </tr>

                <tr >
                    <td colSpan="4" className={HeatMapCSS.tdWeekday}>Tuesday</td>
                    { row.map( (item,index) => 
                        <td 
                            id={index}
                            onClick={ () => setCell( [2,index,heatMap[2][index] ])} 
                            className= { "tdHourEntry " + ((heatMap[2][index] >= 10)? 'element10' : `element${heatMap[2][index] } `)} 
                        >
                            {heatMap[2][index]}
                        </td> )}
                </tr>

                <tr >
                    <td colSpan="4" className={HeatMapCSS.tdWeekday}>Wednesday</td>
                    { row.map( (item,index) => 
                        <td
                            id={index}
                            onClick={ () => setCell( [3,index,heatMap[3][index]])} 
                            className= { "tdHourEntry " + ((heatMap[3][index] >= 10)? 'element10' : `element${heatMap[3][index] } `)} 
                        >
                            {heatMap[3][index]}
                        </td> )}
                </tr>

                <tr >
                    <td colSpan="4" className={HeatMapCSS.tdWeekday}>Thursday</td>
                    { row.map( (item,index) => 
                        <td 
                            id={index}
                            onClick={ () => setCell( [4,index,heatMap[4][index]])} 
                            className={ "tdHourEntry " + ((heatMap[4][index] >= 10)? 'element10' : `element${heatMap[4][index] } `)} 
                        >
                            {heatMap[4][index]}
                        </td> )}
                </tr>

                <tr >
                    <td colSpan="4" className={HeatMapCSS.tdWeekday}>Friday</td>
                    { row.map( (item,index) => 
                        <td 
                            id={index}
                            onClick={ () => setCell( [5,index,heatMap[5][index]])} 
                            className= { "tdHourEntry " + ((heatMap[5][index] >= 10)? 'element10' : `element${heatMap[5][index] } `)} 
                        >
                            {heatMap[5][index]}
                        </td> )}
                </tr>

                <tr >
                    <td colSpan="4" className={HeatMapCSS.tdWeekday}>Saturday</td>
                    { row.map( (item,index) => 
                        <td 
                            id={index}
                            onClick={ () => setCell( [6,index,heatMap[6][index]])} 
                            className={ "tdHourEntry " + ((heatMap[6][index] >= 10)? 'element10' : `element${heatMap[6][index] } `)}
                        >
                            {heatMap[6][index]}
                        </td> )}
                </tr>
            </table>
        </div>

    );
}

export default HeatMap;