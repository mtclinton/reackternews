import React from 'react';
import { RouteComponentProps } from 'react-router';

import Container from '../components/Container';

import getPageNumber from '../util/pageNumber';

interface RouteInfo {
    page?: string,
}

interface IProps extends RouteComponentProps<RouteInfo> {
}

function Ask(props: IProps): JSX.Element {
    const { match } = props;

    return (
        <Container type="ask" url="ask" page={getPageNumber(match.params.page)} />
    );
}

export default Ask;
