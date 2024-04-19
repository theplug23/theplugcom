import React from 'react';
import {dsnCN} from "../../hooks/helper";
import { useTranslation } from 'react-i18next';

function Copyright({className, ...restProps}) {
    const {t} = useTranslation("common")
    return (
        <div className={dsnCN('copyright', className)} {...restProps}>
            <div className="text-center">
                <p>© {new Date().getFullYear()} THEPLUG GROUP </p>
                <div className="copyright-text over-hidden">
                    {t("Designé par")}
                    <a href="#" style={{color: '#b99226'}}>
                        THEPLUG COM
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Copyright;