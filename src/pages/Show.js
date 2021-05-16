import React from 'react';
import { RouteComponentProps } from 'react-router';

import Container from '../components/Container';

import getPageNumber from '../util/pageNumber';

function Show(props){
    const { match } = props;

    return (
        <Container type="show" url="show" page={getPageNumber(match.params.page)} />
    );
}

export default Show;
