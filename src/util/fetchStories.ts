import { BASE_API_URL } from '../constants';

import { IItem, PageType } from "../types";

const getStories = async (
    type: PageType,
    pageNumber: number,
) : Promise<IItem[]> => {
    try {
        let response;
        let json

        if(type === 'updates'){
            response = await fetch(`${BASE_API_URL}/${type}.json`);
            json = await response.json();
            json = json.items;
        } else{
            response = await fetch(`${BASE_API_URL}/${type}stories.json`);
            json = await response.json();
        }

        const storyIds = json.slice((pageNumber - 1) * 30, (pageNumber) * 30);

        const stories: IItem[] = [];

        await Promise.all(
            storyIds.map(async (id: string) => {
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
