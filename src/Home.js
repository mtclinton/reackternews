import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Story from "./Story";
import Footer from "./Footer";

function Home(props) {

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

    const getStories = async (type) => {
        try {
            // const { data: storyIds } = await fetch(
            //     `${BASE_API_URL}/${type}stories.json`
            // );
            const response = await fetch(`${BASE_API_URL}/${type}stories.json`)
            const storyIds = await response.json()

            const stories = await Promise.all(
                storyIds.slice(0, 30).map((storyId) =>getStory(storyId))
            );
            console.log(stories)
            return stories
        } catch (error) {
            console.log('Error while getting list of stories.');

        }
    };

    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getStories(props.type)
            .then((stories) => {
                setStories(stories);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, []);


    return (
        <center>
            <div id="hnmain" className={"table"} style={{border:"0", cellpadding:"0", cellspacing:"0", width:"85%", backgroundColor:"#f6f6ef"}}>
                <Header />
                {isLoading ? (
                    <p className="loading">Loading...</p>
                ) : (
                    <div className={"table"}>
                        {stories.map(( story,index ) => (
                            <Story key={story.id} story={story} rank={index+1}/>
                        ))}
                    </div>
                )}
                <Footer />

            </div>
        </center>
    );
}

export default Home;
