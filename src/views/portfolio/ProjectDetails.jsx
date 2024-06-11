import React, { useEffect } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet';
import HeaderHalf from '../../components/header/HeaderHalf';
import { Container, Row } from 'react-bootstrap';
import TitleCover from '../../components/heading/title-cover/TitleCover';
import TextTrigger from '../../animation/TextTrigger';
import FadeUpTrigger from '../../animation/FadeUpTrigger';
import NextProject from '../../components/next/NextProject';
import { useTranslation } from 'react-i18next';
import BoxGallery from '../../components/box-gallery/BoxGallery';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner'

function ProjectDetails(props) {
    const {slug} = useParams();
    const [nextData, setNextData] = useState({})
    const {t} = useTranslation("common")
    const [project, setProject] = useState({})
    const [info, setInfo] = useState({})
    const [video, setVideo] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.comtheplug.com/api/portfolio/' + slug);
                const projectData = response.data.project;
    
                // Mettre à jour l'état du projet et des informations
                project.video = JSON.parse(projectData.video)
                setProject(projectData);
                setInfo(JSON.parse(projectData.info));
                setVideo(JSON.parse(projectData.video))
               
                // Enregistrer l'événement une fois que les données sont chargées
                ReactGA.event({
                    hitType: 'pageview',
                    page: window.location.pathname,
                    title: `PROJET ${projectData.title} PAGE`
                });

                // Récupérer les données du projet suivant
                const id = projectData.id + 1
                const nextResponse = await axios.get('https://api.comtheplug.com/api/portfolios/' + id);
                const nextProject = nextResponse.data.project;
                setNextData(nextProject)
                setIsLoading(false);
            } catch (error) {
                console.error('Une erreur s\'est produite lors du chargement des données du projet:', error);
                // Gérer les erreurs de chargement des données ici
            }
        };
    
        // Appeler la fonction fetchData dans useEffect avec slug comme dépendance
        fetchData()
    }, [slug]);

    if(!project)
        return <h1>{slug}</h1>


    return (data.component({data}));
}

export default ProjectDetails;