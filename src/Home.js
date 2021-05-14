import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Story from "./Story";
import Footer from "./Footer";

import {
    useParams
} from "react-router-dom";

function More(props) {
    if(props.more){
        return (
            <div>
                            <span className="subtext" style={{paddingLeft:"20px"}}>
                                <span className="title"><a href={`/${props.url}/${props.nextPage}`} className="morelink" rel="next">More</a></span>

                            </span>

            </div>
        ) ;
    } else {
        return (
            <span></span>
        );
    }
}

function Home(props) {
    console.log(props)
    const page = props.page || 1;


    const [nextPage, setNextPage] = useState(1);
    const [more, setMore] = useState(true);

    const BASE_API_URL = 'https://hacker-news.firebaseio.com/v0';

    // ***** fetch data *****
    const fetchData = async url => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            return data
            // setLoadCount(loadCount => loadCount + 1)
        } catch (err) {
            console.log("Error:", err)
        }
    }

    const getStory = async (id) => {
        try {
            return fetchData(`${BASE_API_URL}/item/${id}.json`);
        } catch (error) {
            console.log('Error while getting a story.');
        }
    };

    const getStories = async (type, page) => {
        console.log("calling getstoreis")

        try {
            // const { data: storyIds } = await fetch(
            //     `${BASE_API_URL}/${type}stories.json`
            // );
            console.log('getting stories',page )
            const response = await fetch(`${BASE_API_URL}/${type}stories.json`)
            const storyIds = await response.json()
            console.log("page number is: ",page, 'type: ',typeof page)
            const pageInt = parseInt(page)
            console.log("page Int number is: ",pageInt, 'type: ',typeof pageInt, ' number: ')

            if(pageInt === 1) {
                console.log("calling frong page ",pageInt )

                const stories = await Promise.all(
                    storyIds.slice(0, 30).map((storyId) =>getStory(storyId))
                );
                // this.props.page = 0;
                setNextPage(2);
                console.log(stories )

                return stories

            } else if (Number.isInteger(pageInt )) {
                // console.log(parsed)

                if(pageInt  > storyIds.length) {
                    console.log("out of range pagination")
                } else if ((pageInt *30) > storyIds.length) {

                    const stories = await Promise.all(
                        storyIds.slice((pageInt -1)*30, storyIds.length).map((storyId) =>getStory(storyId))
                    );
                    setMore(false);
                    setNextPage(pageInt +1);
                    return stories

                } else {
                    const stories = await Promise.all(
                        storyIds.slice(pageInt *30-30, pageInt *30).map((storyId) =>getStory(storyId))
                    );
                    console.log(stories)
                    setNextPage(pageInt +1);
                    return stories

                }

            } else {
                console.log('url page error')

            }


        } catch (error) {
            console.log('Error while getting list of stories.');

        }
    };

    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        console.log('useeffect ',page)
        getStories(props.type, page)
            .then((stories) => {
                setStories(stories);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, [page]);


    return (
        <center>
            <div id="hnmain" className={"table"} style={{border:"0", cellpadding:"0", cellspacing:"0", width:"85%", backgroundColor:"#f6f6ef"}}>
                <Header />
                {isLoading ? (
                    <p className="loading">Loading...</p>
                ) : (

                    <div className={"table"}>
                        {stories.map(( story,index ) => (
                            <Story key={story.id} story={story} rank={((page-1)*30)+index+1}/>
                        ))}
                        <More nextPage={nextPage} url ={props.url} more ={more}/>

                    </div>
                )}
                <Footer />

            </div>
        </center>
    );
}

export default Home;
