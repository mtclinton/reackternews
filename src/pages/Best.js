import React from 'react';
import { RouteComponentProps } from 'react-router';

import Container from '../components/Container';

import getPageNumber from '../util/pageNumber';

function Best(props) {
    const { match } = props;

    return (
        <Container type="best" url="best" page={getPageNumber(match.params.page)} />
    );
}

export default Best;
