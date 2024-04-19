import React, { useEffect, useState } from 'react'
import './style.scss'
import {Row, Col} from 'react-bootstrap';
import heroImage from '../../assets/img/header.jpg';
import BlogItem from './BlogItem';
import axios from 'axios';
import { longueurTexte } from '../../utils';


const BlogDetails = [
    {
        id: 1,
        title: "Re Styling",
        image: "/assets/img/blog/1.jpg",
        category: "Photography",
        description: "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
    },
    {
        id: 2,
        title: "Re Styling",
        image: "/assets/img/blog/1.jpg",
        category: "Photography",
        description: "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
    },
    {
        id: 3,
        title: "Re Styling",
        image: "/assets/img/blog/1.jpg",
        category: "Photography",
        description: "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
    },
    {
        id: 4,
        title: "Re Styling",
        image: "/assets/img/blog/1.jpg",
        category: "Photography",
        description: "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
    },
    {
        id: 5,
        title: "Re Styling",
        image: "/assets/img/blog/1.jpg",
        category: "Photography",
        description: "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
    },
    {
        id: 6,
        title: "Re Styling",
        image: "/assets/img/blog/1.jpg",
        category: "Photography",
        description: "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
    }
]


const BlogClassic = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://api.comtheplug.com/api/posts')
        .then(res => setPosts(res.data))
    }, [])

    console.log(posts)

    return (
        <section className='dsn-blog'>
            <Row>
                {posts.map(
                    (item, index) => {
                        return (
                            <Col xs={6} key={index}>
                                <BlogItem
                                    id={item.id}
                                    image={item.image}
                                    title={item.title} 
                                    category={item.category}
                                    author={item.author} 
                                    href={`/blog/${item.slug}`}
                                />
                            </Col>
                        );
                    }
                )}
            </Row>
        </section>
    );
}


export default BlogClassic