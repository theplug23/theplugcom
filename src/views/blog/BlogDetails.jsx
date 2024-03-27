import React, { useEffect, useState } from 'react';
import HeaderDefault from "../../components/header/HeaderDefault";

import DsnGrid from "../../components/DsnGrid";
import {Container} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import CommentForm from "../../components/blog/CommentForm";
import NextPage from "../../components/next/NextPage";
import Footer from "../../components/footer/Footer";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { dateParserTime } from '../../utils';

function BlogDetails({props}) {
    const {t} = useTranslation("common")
    const [post, setPost] = useState({})
    const params = useParams()

    useEffect(() => {
        axios.get('https://api.comtheplug.com/api/posts/' + params.title)
        .then(res => setPost(res.data))
    }, [])

    const heroContent = {
        title: post.title,
        date: dateParserTime(post.created_at),
        category: ['Uncategorized'],
        src: post.image
    }

    return (
        <>

            <HeaderDefault heroContent={heroContent}
                parallax={{yPercent: 30}}
                overlay={4}
                height="80vh"
            />

            <Container className="single-post post-content mb-section">
                <DsnGrid>

                    <div dangerouslySetInnerHTML={{ __html: post.content}}></div>   

                    {/* <div className="p-relative v-dark-head text-center">
                        <ParallaxImage src="/assets/img/blog/1.jpg" overlay={4}/>
                        <Container className="v-middle z-index-1">
                            <ButtonPopup href="https://www.youtube.com/live/l8SRn0XX4Oo?si=PtBx7xPFGm97kXJT"/>
                        </Container>
                    </div> */}

                </DsnGrid>
                
                <CommentForm className="mt-section"/>

            </Container>

            <NextPage className="section-margin" text={t("Prochain article")} to="/blog/">
                A lovely to London with my family
            </NextPage>
            <Footer/>

        </>


    );
}

export default BlogDetails;