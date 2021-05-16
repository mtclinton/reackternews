import React from 'react';
import { RouteComponentProps } from 'react-router';

import Container from '../components/Container';

import getPageNumber from '../util/pageNumber';

function Ask(props) {
    const { match } = props;

    return (
        <Container type="ask" url="ask" page={getPageNumber(match.params.page)} />
    );
}

export default Ask;
