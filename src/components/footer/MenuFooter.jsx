import React from 'react';
import NavLink from "../button/NavLink";
import {dsnCN} from "../../hooks/helper";
import { useTranslation } from 'react-i18next';


function MenuFooter({className, ...restProps}) {
    const {t} = useTranslation("common")
    const paginate = [
        {link: "/about", title: "À propos"},
        {link: "/portfolio", title: "Nos Réalisations"},
        {link: "/services", title: "Nos Services"},
        {link: "/meet-the-team", title: "Notre Equipe"},
        // {link: "/blog-details", title: "News"},
        {link: "/contact", title: "Contacts"}
    ];
    return (
        <ul className={dsnCN('col-menu', className)} {...restProps}>
            {
                paginate.map(
                    (item, i) =>
                        <li key={i}><NavLink to={item.link}>{t(item.title)}</NavLink></li>
                )
            }
        </ul>
    );
}

export default MenuFooter;