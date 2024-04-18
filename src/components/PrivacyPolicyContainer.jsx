import React from 'react'
import { useTranslation } from 'react-i18next';

function PrivacyPolicyContainer({...restProps}) {
    const {t} = useTranslation("common")
    
    return (
        <section {...restProps}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="privacy-policy">
                            <h1 style={{fontWeight: "bold", fontFamily:"Montserrat"}}>{t("Protection des données")}</h1><br/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicyContainer
