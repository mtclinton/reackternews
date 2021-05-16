import React from 'react';
import { RouteComponentProps } from 'react-router';

import Container from '../components/Container';

import getPageNumber from '../util/pageNumber';

function Newest(props) {
    const { match } = props;

    return (
        <Container type="new" url="newest" page={getPageNumber(match.params.page)} />
    );
}

export default Newest;
