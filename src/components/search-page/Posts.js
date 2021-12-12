import React, {useContext,useEffect,useState} from 'react';
import { CellContext } from '../../contexts/CellContext';
import PostsCSS from '../../styles/search/Posts.module.css';
import { RedditDataContext } from '../../contexts/RedditDataContext';
import { processTime } from '../../utils/processTime';

const Posts = () => {
    const [cell, setCell] = useContext(CellContext);
    const [redditData, setRedditData] = useContext(RedditDataContext);

    const[allPosts, setAllPosts] = useState([]);

    let row = new Array( cell[2]);

    const getPosts = () => {

        try {

            const lastPost = cell[2];
            let found = 0;

            for( let i = 0; i< 500; i++ ){
                if( found === lastPost ) {
                    break;
                }
                let data = redditData[i].data;
                let utcDate = new Date(data.created_utc*1000);
                if ( utcDate.getDay() === cell[0] && utcDate.getHours() === cell[1] ) {
                    found++;
                    let cellData = {};
                    cellData.title = data.title;
                    cellData.titleLink = data.permalink;
                    cellData.timePosted = processTime( utcDate.getHours() , utcDate.getMinutes());
                    cellData.score = data.score;
                    cellData.comments = data.num_comments;
                    cellData.author = data.author;

                    setAllPosts( oldState=> [ ...oldState, cellData] );
                }

            }

            console.log(allPosts);
        } catch (e) {
            console.log(e);
        }

    }
    useEffect( () => {
        setAllPosts([]);
        getPosts();
    }, [cell]);

    return (
        <div className={PostsCSS.container}>
            <div className={PostsCSS.subContainer} >
                <div className={PostsCSS.title}>Posts</div>
                <table className={PostsCSS.table}>
                    <tr >
                        <th className={PostsCSS.th} colSpan="8">Title</th>
                        <th className={PostsCSS.th} colSpan="2">Time Posted</th>
                        <th className={PostsCSS.th} colSpan="1">Score</th>
                        <th className={PostsCSS.th} colSpan="2">Comments</th>
                        <th className={PostsCSS.th} colSpan="2">Author</th>
                    </tr>
                    { allPosts.map( (item, index) => 
                        <tr key={index}>
                            <td className={PostsCSS.td} colSpan="8"> <a className={PostsCSS.link} href={`https://www.reddit.com/${item.titleLink}`} >{item.title}</a> </td>
                            <td className={PostsCSS.td} colSpan="2"> {item.timePosted} </td>
                            <td className={PostsCSS.td} colSpan="1"> {item.score} </td>
                            <td className={PostsCSS.td} colSpan="2"> {item.comments} </td>
                            <td className={PostsCSS.td} colSpan="2"> <a className={PostsCSS.link} href={`https://www.reddit.com/user/${item.author}`} >{item.author} </a></td>
                        </tr>
                    )}
                </table>

            </div>
        </div>
    );
}

export default Posts;