import React, { useEffect, useState } from "react";
import { getPortfolioData } from "../../api/portfolio/PortfolioData";
import { Helmet } from "react-helmet";
import HeaderNormal from "../header/HeaderNormal";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import TitleSection from "../heading/TitleSection";
import Footer from "../footer/Footer";
import WebDesignList from "./WebDesignList";

const PortfolioWebDesign = () => {
    const [projects, setProjects] = useState([])
    const {t} = useTranslation("common")  
    
    useEffect(() => {
        const projects = getPortfolioData();
        const filteredProjects = projects.filter(p => p.category.includes('Web Design'))
        setProjects(filteredProjects)
    }, [])

    return (
        <React.Fragment>
            <Helmet>
                <title>Web Design Project - THEPLUG COM'</title>
            </Helmet>
            <HeaderNormal className="background-section text-uppercase" description={t("Nos dernières réalisations Web Design")}>
                {t("Nos Réalisations")}<br/> 
            </HeaderNormal>
            <Container as={TitleSection} description={t("Nos Réalisations")} className="mt-section">
                {t("Projets Web Desing réalisés")}
            </Container>
            <WebDesignList projects={projects} />
            <Footer />
        </React.Fragment>
    )
}

export default PortfolioWebDesign;