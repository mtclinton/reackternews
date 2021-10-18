import React from 'react';
import { RouteComponentProps } from 'react-router';

import Container from '../components/Container';

import getPageNumber from '../util/pageNumber';

interface RouteInfo {
    page?: string,
}

interface IProps extends RouteComponentProps<RouteInfo> {
}

function Newest(props: IProps): JSX.Element {
    const { match } = props;

    return (
        <Container type="new" url="newest" page={getPageNumber(match.params.page)} />
    );
}

export default Newest;
