import React from 'react'
import { Helmet } from 'react-helmet'
import HeaderNormal from '../components/header/HeaderNormal';
import { useTranslation } from 'react-i18next';
import Footer from '../components/footer/Footer';
import { Container } from 'react-bootstrap';
import TitleSection from '../components/heading/TitleSection';
import BlogClassic from '../components/blog/BlogContainer';

const headerContent = {
    title: "Blog",
    description: `Découvrez nos différents blogs quotidiens`,
};

export default function Blogs() {
    const { t } = useTranslation("common")

    return (
        <React.Fragment>
            <Helmet>
                <title>BLOG - THEPLUG COM'</title>
            </Helmet>

            <HeaderNormal 
                className="background-section text-uppercase" 
                description={t(headerContent.description)}
            >
                {t(headerContent.title)}<br/> 
            </HeaderNormal>

            <Container className="section-margin">
                <TitleSection description={t("Nos Blogs")} />
                <BlogClassic />
            </Container>

            <Footer />
        </React.Fragment>
    )
}
