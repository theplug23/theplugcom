import React, { useState, useEffect, useRef } from 'react'
import { dsnCN } from '../../hooks/helper';
import DsnGrid, { DsnGridProps } from '../DsnGrid';
import Isotope from "isotope-layout";
import { useTranslation } from "react-i18next";
import {getPortfolioData} from "../../api/portfolio/PortfolioData";
import PortfolioProjectItem from './PortfolioProjectItem';
import {Row, Col, NavLink, Button} from 'react-bootstrap';
import MetaPost from '../header/MetaPost';
import { displayWords } from '../../utils';
import BgImage from '../header/BgImage';

function PortfolioProjectList({ className, ...restProps }: DsnGridProps) {
    const {t} = useTranslation("common")  
    const dataPortfolio = getPortfolioData();
    const category = new Set();
    dataPortfolio.map((p) => {
    return typeof p.category === "object"
        ? p.category.map((i) => category.add(i))
        : category.add(p.category);
    });
    
    const [colValue, setColValue] = useState(12)

    useEffect(() => {
        const screenWidth = window.screen.width
        //console.log(screenWidth)
        if (screenWidth > 800) {
            setColValue(4)
        } else if (screenWidth  <= 800 && screenWidth > 430) {
           setColValue(6)
        } else {
            setColValue(12)
        }
    }, [])

    return (
        <section className='mb-section'>
            <Row>
                {dataPortfolio.map(
                    (item, index) => {
                        return (
                            <Col xs={colValue} key={index} style={{marginBottom: 50}} className='portfolio-item'>
                                <a href={`portfolio/${item.slug}`}>
                                    <div className="inner-img">
                                        <BgImage
                                            className={"dsn-swiper-parallax-transform"}
                                            src={item.src}
                                            video={item.video}
                                            alt={item.title}
                                            overlay={2}
                                            height={"100%"}
                                        />
                                    </div>
                                    <div className="box-content background-section">
                                        {item.title && <h4 className='title-block' style={{ margin: '15px 0px'}}>
                                            <NavLink to={item.href} style= {{color: '#b99226'}}>{item.title}</NavLink>
                                        </h4>}
                                        <p className="mt-15">{displayWords(t(item.description[0]), 30)}</p>
                                        <Button 
                                            href={item.href} 
                                            style= {{color: '#b99226', marginTop: '15px', textDecoration: 'underline'}}
                                        >
                                            {t("Voir plus")}
                                        </Button>
                                    </div>
                                </a>
                            </Col>
                        );
                    }
                )}
            </Row>
        </section>
    )
}

export default PortfolioProjectList
