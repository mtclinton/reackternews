import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Item from './item/Item';
import Footer from './nav/Footer';
import Header from './nav/Header';

import fetchStories from '../util/fetchStories';


function Container(props) {
    const { url, type, page } = props;

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

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
        </>
    );
}

export default Container;
