import React, { useEffect, useRef, useState } from "react";
import BgImage from "../header/BgImage";
import { dsnCN } from "../../hooks/helper";
import { useTranslation } from 'react-i18next'

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import { displayWords } from "../../utils";

function ProductionVideoItem({portoDetails, imageOnly, className}) {
    const {t} = useTranslation("common")
    const ref = useRef();

    useEffect(() => {
        const video = ref.current.querySelector("video");
        if (!video) return;

        video.pause();
        const portItem = ref.current,
        mouseEnter = () => video.play(),
        mouseLeve = () => video.pause();

        portItem.addEventListener("mouseenter", mouseEnter);
        portItem.addEventListener("mouseleave", mouseLeve);

        return () => {
            if (!video) return;
            portItem.removeEventListener("mouseenter", mouseEnter);
            portItem.removeEventListener("mouseleave", mouseLeve);
        };
    });


    return (
        <a 
            href={portoDetails.src} 
            className={dsnCN("portfolio-item text-center v-dark-head", className)}
            ref={ref}
            style={{ marginBottom: 80 }}
        >
            <div className="inner-img" style={{ height: 350}}>
                <BgImage
                    className={"dsn-swiper-parallax-transform"}
                    src={portoDetails.src}
                    video={portoDetails.video}
                    alt={portoDetails.title}
                    overlay={portoDetails.overlay}
                    height={500}
                    imageOnly={imageOnly}
                />
            </div>
          
            <div className="info-text">
                <h4 className="title-block" style={{ textAlign: 'left', fontSize: 15 }}>{t(displayWords(portoDetails.title, 5))}</h4>
                <p style={{ textAlign: 'left', fontSize: 12 }}>{displayWords(portoDetails.description, 20)}</p>
            </div>
        </a>
    )
}

export default React.memo(ProductionVideoItem);
