import React, { useState } from 'react';
import {dsnCN} from "../../hooks/helper";
import './style.scss'
import axios from 'axios';

function CommentForm({className, idPost}) {
    const [form, setForm] = useState({})

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setForm({...form, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        const now = new Date()
        form.post_id = parseInt(idPost)
        form.date = now
        console.log(form)
        axios.post('http://localhost:3004/comments', form).then(console.log('post posted'))
    }


    return (
        <div className={dsnCN('form-box', className)}>
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
    );
}

export default CommentForm;