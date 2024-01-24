import React, { useEffect } from 'react';
import {useParams} from "react-router-dom";
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";
import ReactGA from 'react-ga4';

function ProjectDetails(props) {
    const {slug} = useParams();
    const data = getPortfolioItem(slug, 'slug');

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: `PROJET ${data.title} PAGE`
        })
    })

    if(!data)
        return <h1>{slug}</h1>


    return (data.component({data}));
}

export default ProjectDetails;