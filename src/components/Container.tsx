import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Item from './item/Item';
import Footer from './nav/Footer';
import Header from './nav/Header';

import { IItem, PageType } from '../types';

import fetchStories from '../util/fetchStories';

interface IProps {
    type: PageType,
    url: string,
    page: number,
}

function Container(props: IProps) {
    const { url, type, page } = props;

    const [loading, setLoading] = useState<boolean>(true);
    const [items, setItems] = useState<IItem[]>([]);

    useEffect(() => {
        setLoading(true);
        setItems([]);

        async function getItems() {
            setItems(await fetchStories(type, page));
            setLoading(false);
        }
        getItems();

        return () => {};
    }, [page]);

    return (
        <>
            <div>
                <div id="hnmain" className={"table"} style={{border:"0", width:"85%", backgroundColor:"#f6f6ef"}}>
                    <Header />
                    {
                        loading && <div>Loading</div>
                    }
                    {
                        !loading
                        && items.map(
                            (item, i) => (
                                <Item
                                    key={item.id}
                                    item={item}
                                    rank={(i + 1) + ((page - 1) * 30)}
                                />
                            ),
                        )
                    }
                    {
                        items.length > 0
                        && <Link to={`/${url}/${page + 1}`}>More</Link>
                    }
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Container;
