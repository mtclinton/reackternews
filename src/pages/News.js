import React from 'react';

import Container from '../components/Container';

import getPageNumber from '../util/pageNumber';


function News(props) {
    const { match } = props;

    return (
        <Container type="top" url="news" page={getPageNumber(match.params.page)} />
    );
}

export default News;
