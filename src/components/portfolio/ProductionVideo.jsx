import React, { useEffect } from "react"
import {Helmet} from "react-helmet";
import HeaderNormal from "../header/HeaderNormal";
import {Container} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import ReactGA from "react-ga4";
import TitleSection from "../heading/TitleSection";
import Footer from "../footer/Footer";
import ProductionVideoList from "./ProductionVideoList";

export const ProductionVideo = () => {
    const {t} = useTranslation("common")

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "PRODUCTION VIDEO PAGE"
        })
        
    }, [])

    return (
        <React.Fragment>
            <Helmet>
                <title>OUR PRODUCTION VIDEO - THEPLUG COM'</title>
            </Helmet>

            <HeaderNormal className="background-section text-uppercase" description={t("Nos dernières réalisations")}>
                {t("Notre Production Vidéo")} 
            </HeaderNormal>

            <Container className="mt-section">
                <TitleSection description={t("Projets vidéo réalisés")} />
                <ProductionVideoList />
            </Container>

            {/* <DsnGrid>
                <div className="p-relative v-dark-head text-center">
                    <ParallaxImage src="/assets/img/project/Wifor/Bild-2.jpg" overlay={4}/>
                    <Container className="v-middle z-index-1">
                        <ButtonPopup href="https://youtu.be/SzNp8ED68uM"/>
                    </Container>
                </div>
                <div className="p-relative v-dark-head text-center">
                    <ParallaxImage src="/assets/img/project/Epideaa/ROLL-UP-Epideaa.jpg" overlay={4}/>
                    <Container className="v-middle z-index-1">
                        <ButtonPopup href="https://youtu.be/SzNp8ED68uM"/>
                    </Container>
                </div>
            </DsnGrid> */}
            <br /><br />
            <Footer/>
        </React.Fragment>
    )
}
