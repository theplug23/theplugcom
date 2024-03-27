import React, { useState } from 'react';
import {dsnCN} from "../../hooks/helper";
import './style.scss'
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';


function CommentForm({className, idPost}) {
    const [form, setForm] = useState({})
    const {t} = useTranslation("common")

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setForm({...form, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        //form.post_id = parseInt(idPost)
        form.post_id = 2
        console.log(form)
        /*axios.post('https://api.comtheplug.com/api/add-comment', form)
        .then((res) => {
            toast(res)
            console.log('post posted')
        })*/
    }


    return (
        <div className={dsnCN('form-box', className)}>
            <ToastContainer />
            <h4 className="mb-30">{t("Ajouter un commentaire")}</h4>
            <form onSubmit={handleSubmit}>
                <div className="input__wrap controls">
                    <div className="form-group">
                        <label>{t("Quel est votre nom ?")}</label>
                        <input 
                            id="form_name" 
                            type="text" 
                            name="name" 
                            placeholder={t("Entrer votre nom")}
                            onChange={handleChange} 
                            required="required"
                        />
                    </div>

                    <div className="form-group">
                        <label>{t("Quelle est votre adresse email ?")}</label>
                        <input 
                            id="form_email" 
                            type="email" 
                            name="email" 
                            placeholder="Type your Email Address"
                            onChange={handleChange} 
                            required="required"
                        />
                    </div>

                    <div className="form-group">
                        <label>{t("Votre commentaire")}</label>
                        <textarea 
                            id="form_message" 
                            className="form-control" 
                            name="comment"
                            placeholder={t("Dites-nous ce que vous en pensez")}
                            required="required"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="image-zoom">
                        <button type="submit">{t("Commenter")}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CommentForm;