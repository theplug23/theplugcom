import React, { useState, useEffect, useRef } from 'react'
import { Row, Col } from 'react-bootstrap';
import BlogItem from '../blog/BlogItem';
import axios from 'axios';
import ProductionVideoItem from './ProductionVideoItem';
import { dsnCN } from '../../hooks/helper';
import DsnGrid, { DsnGridProps } from '../DsnGrid';
import Isotope from "isotope-layout";
import { useTranslation } from "react-i18next";

export default function ProductionVideoList({ className, ...restProps }: DsnGridProps) {
    const videos = [
        {
            id: 85,
            title: "SPOT PUBLICITAIRE THEPLUG COMMUNICATION 2023",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/UNTZ52GUkFM",
            description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette.jpg',
                loop: true
            },
            isHome: true
        },
        {
            id: 92,
            title: "Spot publicitaire de l'entreprise pétroliere Finex",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/Gr5jwbfhV6E",
            description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 3.jpg',
                loop: true
            }
        },
        {
            id: 8,
            title: "THEPLUG Reel 2023",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/Y9mjsPi7UDk",
            description: 'Une Entreprise devouée à la réalisation de vos projets digitaux',
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 9.jpg',
                loop: true
            }
        },
        {
            id: 67,
            title: "Découvrez les Maldives avec Epideaa",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/x-u_3hwtSww",
            description: 'EPIDEAA se présente comme le guide idéal pour des vacances aux Maldives, offrant une exploration des trésors naturels de ce paradis terrestre.',
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 8.jpg',
                loop: true
            }
        },
        {
            id: 95,
            title: "Pregnancy Announcement video by THEPLUG-WEDDING.COM",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/rzEP767qF-E",
            description: 'Pregnancy Announcement video by THEPLUG-WEDDING.COM in Darmstadt und Odenwald.',
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 7.jpg',
                loop: true
            }
        },
        {
            id: 6,
            title: "CAMPAGNE 8 MARS - ETUDIANTE",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/cEqwN3h95Jw",
            description: "UNE FEMME, UNE VOIX, UN IMPACT ! 💖 En l’honneur de la Journée internationale des droits des femmes, nous avons eu le privilège d'interviewer une jeune étudiante qui, outre ses études, occupe également le poste d'assistante de communication et de direction. ",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 6.jpg',
                loop: true
            }
        },
        {
            id: 4,
            title: "WifOR Institute GmbH feiert 15-jähriges Jubiläum im Merck-Stadion am Böllenfalltor(Darmstadt)",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/SzNp8ED68uM",
            description: "Die WifOR Institute GmbH aus Darmstadt feierte kürzlich ihr bemerkenswertes 15-jähriges Jubiläum mit einer spektakulären Feier im Fußballstadion der Stadt, dem Merck-Stadion am Böllenfalltor.",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 2.jpg',
                loop: true
            }
        },
        {
            id: 23,
            title: "NULLDREI-Documentaire",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/WOAzN_oYPG0",
            description: "",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 5.jpg',
                loop: true
            }
        },
        {
            id: 67,
            title: "ImageFilm - SoPlus Line 30.08.2023",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/YgT_nYhYXEE",
            description: "",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 4.jpg',
                loop: true
            }
        }
    ]
    const {t} = useTranslation("common")
    const iso = useRef();
    const [filter, setFilter] = useState("*");
    const refIsotope = useRef();
    const category = new Set();
    videos.map((p) => {
    return typeof p.category === "object"
        ? p.category.map((i) => category.add(i))
        : category.add(p.category);
    });

    useEffect(() => {
        iso.current = new Isotope(refIsotope.current, {
            itemSelector: ".portfolio-item",
        });

        return () => {
            iso.current.destroy();
        };
    });
    
    useEffect(() => {
        iso.current.arrange({ filter: filter });
    }, [filter]);

    return (
        <section className={dsnCN("dsn-portfolio port-classic", className)}>
            <DsnGrid {...restProps} isGallery ref={refIsotope}>
                {videos.map((item, index) => (
                    <ProductionVideoItem 
                        className={
                            typeof item.category === "object"
                            ? item.category.join(" ").toLowerCase()
                            : item.category.toLowerCase()
                        }
                        key={index}
                        portoDetails={item}
                        textButton={t("Voir Plus")}
                    />
                ))}
            </DsnGrid>
        </section>
    )
}
