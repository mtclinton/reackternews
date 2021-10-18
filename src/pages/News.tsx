import React from 'react';

import Container from '../components/Container';

import getPageNumber from '../util/pageNumber';
import {RouteComponentProps} from "react-router";

interface RouteInfo {
    page?: string,
}

interface IProps extends RouteComponentProps<RouteInfo> {
}


function News(props: IProps): JSX.Element {
    const { match } = props;

    return (
        <Container type="top" url="news" page={getPageNumber(match.params.page)} />
    );
}

export default News;
