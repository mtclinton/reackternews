import React from 'react';
import { RouteComponentProps } from 'react-router';

import Container from '../components/Container';

import getPageNumber from '../util/pageNumber';

interface RouteInfo {
    page?: string,
}

interface IProps extends RouteComponentProps<RouteInfo> {
}

function Jobs(props: IProps): JSX.Element {
    const { match } = props;

    return (
        <Container type="job" url="jobs" page={getPageNumber(match.params.page)} />
    );
}

export default Jobs;
