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
            description: "Video montage representing a compilation of all the video projects produced by Theplug 2023",
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
            description: "Photo and video coverage of the 15th anniversary of WifOR Institute",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 2.jpg',
                loop: true
            }
        },
        {
            id: 3,
            title: "NULLDREI-Documentary",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/WOAzN_oYPG0",
            description: "Production of a documentary by the artist NULLDREI sponsored by the brand Pegasus PRO",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 5.jpg',
                loop: true
            }
        },
        {
            id: 4,
            title: "ImageFilm - SoPlus Line GmbH",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/YgT_nYhYXEE",
            description: "Production of the advertising video for SoPlus Line GmbH",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 4.jpg',
                loop: true
            }
        },
        {
            id: 5,
            title: "Discover the Maldives with Epideaa",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/x-u_3hwtSww",
            description: "Creation of a concept and brand identity. Photography and videography",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette 8.jpg',
                loop: true
            }
        },
        {
            id: 6,
            title: "Theplug Communication 2023 advertising spot",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/aDTVWlWItsc?si=-tgs9C1BdETHLxMo",
            description: "Video montage of Theplug advertising spot",
            overlay: 1,
            video: {
                poster: '/assets/img/project/Vignette.jpg',
                loop: true
            }
        },
        {
            id: 7,
            title: "Finex advertising spot",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/Gr5jwbfhV6E",
            description: "Production of an advertising spot for the Gabonese petroleum products transport company Finex",
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
            title: "8 MARCH CAMPAIGN",
            slug: 'Spot',
            category: ['Video'],
            src: "https://youtu.be/cEqwN3h95Jw",
            description: "Interview with a young student on International Women's Day 2024",
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
