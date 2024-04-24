import React, { useState, useEffect, useRef } from 'react'
import ProductionVideoItem from './ProductionVideoItem';
import { dsnCN } from '../../hooks/helper';
import DsnGrid, { DsnGridProps } from '../DsnGrid';
import Isotope from "isotope-layout";
import { useTranslation } from "react-i18next";

export default function ProductionVideoList({ className, ...restProps }: DsnGridProps) {
    const videos = [
        {
            id: 1,
            title: "THEPLUG Reel 2023",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/Y9mjsPi7UDk",
            description: "Montage vidéo représetant la compilation de tous les projets vidéo réalisés par Theplug",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 9.jpg',
                loop: true
            }
        },
        
        {
            id: 2,
            title: "WifOR Institute GmbH (Darmstadt)",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/SzNp8ED68uM",
            description: "Couverture photo et vidéo de l'entreprise WifOR Institute à l'occasion de leur 15 ans",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 2.jpg',
                loop: true
            }
        },
        {
            id: 3,
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
            id: 4,
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
        },
        {
            id: 5,
            title: "Découvrez les Maldives avec Epideaa",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/x-u_3hwtSww",
            description: "Création d'un concept et d'une identité de marque. Photographie et vidéographie",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 8.jpg',
                loop: true
            }
        },
        {
            id: 6,
            title: "Spot publicitaire Theplug Communication 2023",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/UNTZ52GUkFM",
            description: "Montage vidéo du spot publicitaire de l'entreprise Theplug",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette.jpg',
                loop: true
            }
        },
        {
            id: 7,
            title: "Spot publicitaire de l'entreprise Finex",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/Gr5jwbfhV6E",
            description: "Réalisation du sport publicitaire de l'entreprise gabonaise de transport de produits pétroliers FInex",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 3.jpg',
                loop: true
            }
        },
        {
            id: 8,
            title: "Pregnancy Announcement video",
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
            id: 9,
            title: "CAMPAGNE 8 MARS",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/cEqwN3h95Jw",
            description: "Réalisation de l'interview d'une jeune étudiante lors de la journée internationale de la femme 2024",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 6.jpg',
                loop: true
            }
        },
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
