import React, { useState, useEffect } from 'react';
import HeaderDefault from "../../components/header/HeaderDefault";
import DsnGrid from "../../components/DsnGrid";
import {Container} from "react-bootstrap";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import CommentForm from "../../components/blog/CommentForm";
import NextPage from "../../components/next/NextPage";
import Footer from "../../components/footer/Footer";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { dateParser } from '../../utils';
import {dsnCN} from "../../hooks/helper";
import { ToastContainer, toast } from 'react-toastify';

function BlogDetails({props}) {
    const {title} = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [form, setForm] = useState({})

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setForm({...form, [name]: value})
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        const now = new Date()
        form.post_id = parseInt(post[0].id)
        form.date = now
        console.log(form)
        axios.post('http://localhost:3004/comments', form)
        .then(toast('Commentaire enregistré !'))
    }

    function getPostByTitle(title) {
        axios.get('http://localhost:3004/posts?title=' + title)
        .then(res => setPost(res.data))
    }

    async function getCommentsByPost(id) {
        await axios.get('http://localhost:3004/comments?post_id=' + id)
        .then(res => setComments(res.data))
    }

    useEffect(() => {
        getPostByTitle(title)
        getCommentsByPost(post[0].id)
    }, [])

    console.log(post[0])
    console.log(comments)

    const heroContent = {
        title: post[0].title,
        date: dateParser(post[0].date),
        category: post[0].category,
        src: post[0].image
    }

    return (
        <>

            <HeaderDefault heroContent={heroContent}
                parallax={{yPercent: 30}}
                overlay={4}
                height="80vh"
            />
            <ToastContainer />
            <Container className="single-post post-content mb-section">
                <DsnGrid>

                    {post[0].description_1 && <p>{post[0].description_1.bloc_1}</p>}

                    {post[0].description_1 && <p>{post[0].description_1.bloc_2}</p>}

                    {post[0].title_plus && <h4><strong>{post[0].title_plus}</strong></h4>}

                    {post[0].description_2 && <p>{post[0].description_2.bloc_1}</p>}

                    {post[0].description_2 && <p>{post[0].description_2.bloc_2}</p>}

                </DsnGrid><br /><br />
                
                <div className={dsnCN('form-box')}>
                    <h4 className="mb-30">Ajouter un commentaire</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="input__wrap controls">
                            <div className="form-group">
                                <label>What's your name?</label>
                                <input 
                                    id="form_name" 
                                    type="text" 
                                    name="name" 
                                    placeholder="Type your name"
                                    onChange={handleChange} 
                                    required="required"
                                />
                            </div>

                            {/* <div className="form-group">
                                <label>What's your email address?</label>
                                <input id="form_email" type="email" name="email" placeholder="Type your Email Address"
                                    required="required"/>
                            </div> */}

                            <div className="form-group">
                                <label>Comment?</label>
                                <textarea 
                                    id="form_message" 
                                    className="form-control" 
                                    name="comment"
                                    placeholder="Tell us about you and the world" 
                                    required="required"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="image-zoom">
                                <button type="submit">Post Comment</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div style={{marginTop: '50px'}}>
                    <h4>Commentaires</h4>
                    {comments.map((comment, i) => (
                        <div key={i}>
                            <div style={{display: 'flex', marginTop: '20px'}}>
                                <span 
                                    style={{fontSize: '20px', color: 'white', marginRight: '10px'}}
                                >{comment.name}</span>
                                <p style={{fontSize: '16px', marginTop: '3px'}}>{comment.comment}</p>
                            </div>
                            <span>{dateParser(comment.date)}</span>
                        </div>
                    ))}
                </div>
            </Container>

            <NextPage className="section-margin" text="Next Post" to="/blog-details">
                A lovely to London with my family
            </NextPage>
            <Footer/>

        </>


    );
}

export default BlogDetails;