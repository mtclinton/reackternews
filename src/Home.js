import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Story from "./Story";

function Home() {

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
        getStories('top')
            .then((stories) => {
                setStories(stories);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, []);


    return (
        <div>
            <Header />
            <div className="Home">
                Home
            </div>
            {isLoading ? (
                <p className="loading">Loading...</p>
            ) : (
                <div>
                    {stories.map(( story ) => (
                        <Story key={story.id} story={story} />
                    ))}
                </div>
            )}

        </div>
    );
}

export default Home;
