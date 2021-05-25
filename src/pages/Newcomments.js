import React from 'react';
import { RouteComponentProps } from 'react-router';

import Container from '../components/Container';

import getPageNumber from '../util/pageNumber';


function Newcomments(props) {
    const { match } = props;

    return (
        <Container type="updates" url="newcomments" page={getPageNumber(match.params.page)} />
    );
}

export default Newcomments;
