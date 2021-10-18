import React from 'react';
import { RouteComponentProps } from 'react-router';

import Container from '../components/Container';

import getPageNumber from '../util/pageNumber';

interface RouteInfo {
    page?: string,
}

interface IProps extends RouteComponentProps<RouteInfo> {
}

function Newcomments(props: IProps): JSX.Element {
    const { match } = props;

    return (
        <Container type="updates" url="newcomments" page={getPageNumber(match.params.page)} />
    );
}

export default Newcomments;
