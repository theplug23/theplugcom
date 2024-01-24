import React from 'react'

import './style.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import DsnGrid, {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const BrandDetails = [
    {
        src: "/assets/img/project/Epideaa/Fichier 3.png",
        title: "EPIDEAA",
        href: "https://epideaa.com/",
        linkText: "epideaa.com",
    },
    {
        src: "/assets/img/logo/1.png",
        title: "EBONY EVENTS",
        href: "http://ebony-event.com/",
        linkText: "ebony-event.com",
    },
    {
        src: "/assets/img/logo/2.png",
        title: "MB-CREATION",
        href: "http://www.mb-creation.com",
        linkText: "mb-creation.com",
    },
    {
        src: "/assets/img/logo/PULSELIVE.png",
        title: "PULSE LIVE",
        href: "https://pulse-live.de/",
        linkText: "pulse-live.de",
    },
    {
        src: "/assets/img/logo/cakebynoemi.png",
        title: "MAMAN2NOEMI",
        href: "https://www.maman2noemi.com/",
        linkText: "maman2noemi.com",
    },
    {
        src: "/assets/img/logo/EsK_Translations.png",
        title: "ESK-TRANSLATIONS",
        href: "https://esk-translations.com/",
        linkText: "esk-translations.com",
    },
    {
        src: "/assets/img/logo/EMD-logo.png",
        title: "EMD PRODUCTION",
        href: "https://google.com/",
        linkText: "google.com",
    },
    {
        src: "/assets/img/logo/Madhi-logo.png",
        title: "MADHI",
        href: "https://google.com/",
        linkText: "google.com",
    },
    {
        src: "/assets/img/logo/Logo NHPC - PNG.png",
        title: "NHPC",
        href: "https://nhpc.org/",
        linkText: "nhpc.org",
    },
    {
        src: "/assets/img/logo/epouse eden - c2023 logo.png",
        title: "EPOUSE EDEN",
        href: "https://google.com/",
        linkText: "google.com",
    },
    {
        src: "/assets/img/logo/ALVI LOGO.png",
        title: "ALVI 7 HOTEL",
        href: "https://alvihotel.com/",
        linkText: "alvi7hotel.com",
    },
    {
        src: "/assets/img/logo/LOGO WEDDING-NOIR.png",
        title: "THEPLUG WEDDING",
        href: "https://theplug-wedding.com/",
        linkText: "theplug-wedding.com",
    }
]

function BrandClient({className, ...restProps}: DsnGridProps) {

    return (
        <DsnGrid className={dsnCN('wrapper-brand', className)} {...restProps}>
            {BrandDetails.map(
                (item, index) => {
                    return (
                        <div key={index} className="brand-item background-section">
                            <div className="box-img">
                                <LazyImg src={item.src} alt=""/>
                            </div>
                            <div className="info">
                                <div className="content">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </div>

                                    <div className="entry">
                                        <div>
                                            <h5 className='mb-20'>
                                                {item.title}
                                            </h5>
                                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                                {item.linkText}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
            )}
        </DsnGrid>

    )
}

export default BrandClient
