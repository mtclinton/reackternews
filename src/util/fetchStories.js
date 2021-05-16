import { BASE_API_URL } from '../constants';


const getStories = async (
    type,
    pageNumber,
)  => {
    try {
        const response = await fetch(`${BASE_API_URL}/${type}stories.json`);

        const json = await response.json();
        const storyIds = json.slice((pageNumber - 1) * 30, (pageNumber) * 30);

        const stories = [];

        await Promise.all(
            storyIds.map(async (id) => {
                try {
                    const data = await fetch(`${BASE_API_URL}/item/${id}.json`);
                    const story = await data.json();
                    if (story) {
                        stories.push(story);
                    }
                } catch (e) {
                    console.log(`Error fetching story: ${id}`);
                }
            }),
        );

        return stories;
    } catch (error) {
        console.log('Error while getting list of stories.');
    }

    return [];
};

export default getStories;
