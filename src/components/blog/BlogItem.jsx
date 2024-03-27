import React from 'react'

import './style.scss'
import MetaPost from "../header/MetaPost";
import NavLink from "../button/NavLink";
import { Button } from 'react-bootstrap';

function BlogItem({id, image, category, title, author, href}) {

    return (
        <div className="blog-item">
            <div className="box-img">
                <img src={image} alt="article_image"/>
            </div>
            <div className="box-content background-section">
                {category && <MetaPost category={category} separate=", "/>}
                {title && <h4 className='title-block'>
                    <NavLink to={href} style= {{color: '#b99226'}}>{title}</NavLink>
                </h4>}
                {author && <p className="mt-15">{author}</p>}
                <Button 
                    href={`/blog/${title}`} 
                    style= {{color: '#b99226', marginTop: '15px', textDecoration: 'underline'}}
                >
                    Read More
                </Button>
            </div>
        </div>
    )
}

export default BlogItem