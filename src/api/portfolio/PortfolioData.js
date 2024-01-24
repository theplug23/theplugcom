import TimeTagWatch from "../../views/portfolio/TimeTagWatch";
import UnderArmour from "../../views/portfolio/UnderArmour";
import ReStyling from "../../views/portfolio/ReStyling";
import ToastReel from "../../views/portfolio/ToastReel";
import WhatIfGold from "../../views/portfolio/WhatIfGold";
import NileKabutha from "../../views/portfolio/NileKabutha";
import SleepWalker from "../../views/portfolio/SleepWalker";
import NovaraConic from "../../views/portfolio/NovaraConic";
import BastianBux from "../../views/portfolio/BastianBux";

const data = [
    {
        id: 1,
        title: "Epouse Eden",
        slug: 'epouse-eden',
        src: 'https://youtu.be/SeoF3Ei1E_E',
        category: ['Graphisme', 'Vidéographie'],
        description: [
            "Vision portée par l’association Mastering your life de Leipzig en Allemagne qui se donne pour mission de détruire et renverser les systèmes de pensée du monde actuel, afin de rétablir la vérité qui affranchit des faux raisonnements pour exercer une vraie liberté en Christ, rendant chaque chrétien capable de briller dans tous les domaines : politique, économique, artistique, sportif, entrepreneuriat, médias, etc.",
            "Pour la troisième édition de son événement EdenDay, se déroulant au Congo à Lubumbashi et ayant pour thème: L'Epouse Arrive. ThePlug Com' a joué un rôle essentiel en créant un film destiné à servir de bande-annonce pour accompagner la communication de l'événement."
        ],
        overlay: 6,
        date: "09-15-2023",
        href: "https://comtheplug.com",
        video: {
            poster: '/assets/img/logo/epouse eden - c2023 logo.png',
            loop: true
        },
        bgVid: '/assets/img/project/Play icon.jpg',
        images: [
            "https://youtu.be/SeoF3Ei1E_E",
            "/assets/img/project/Epouse Eden/Business_Card_Mockup.jpg", 
            "/assets/img/project/Epouse Eden/epouse-eden-document-mock-up.jpg",
            "/assets/img/project/Epouse Eden/Free_Baseball_Cap_Mockup_2.jpg", 
            "/assets/img/project/Epouse Eden/Free_MacBook_Pro_2.jpg", 
            "/assets/img/project/Epouse Eden/Free_Mug_Mockup_2.jpg",
            "/assets/img/project/Epouse Eden/Free_Pen_Mockup_1.jpg",
            "/assets/img/project/Epouse Eden/Free_Shopping_Bag_Mockup_1.jpg",
            "/assets/img/project/Epouse Eden/invitation-card.jpg",
            "/assets/img/project/Epouse Eden/T-Shirt-Blanc_Maquette.jpg"
        ],
        isvideo: true,
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'STELLA TCHOUMI'
        }
    },
    {
        id: 2,
        title: 'THEPLUG WEDDING',
        slug: 'theplug-wedding',
        src: '/assets/img/project/THEPLUG WEDDING/THEPLUG-Wedding-Mock-up.jpg',
        srcSlider: '/assets/img/project/THEPLUG WEDDING/THEPLUG-Wedding-Mock-up.jpg',
        category: ['Graphisme', 'Vidéographie', 'Web Design', 'Photographie'],
        description: [
            "THEPLUG WEDDING est une agence spécialisée dans la capture des moments les plus mémorables des mariages, tant en photographie qu'en vidéo. La mission de l’agence est d'immortaliser les cérémonies officielles qui unissent deux êtres dans la promesse d'un amour et d'une fidélité éternels. Chez THEPLUG WEDDING, l'amour et l'art fusionnent pour exprimer une beauté exceptionnelle.",
            "Cette philosophie transparaît dans la conception de leur site internet, où les photographies et vidéos mettent en lumière un univers harmonieux empreint de joie et de bonheur. Notre objectif dans cette réalisation était de démontrer que la photographie de mariage va au-delà de simples 'clics', mais qu'elle vise à capturer toute la magie d'un moment unique. Cela requiert créativité et une collaboration étroite entre les mariés et le photographe, contribuant à faire ressortir toute la magie de cet instant unique"
        ],
        overlay: 6,
        date: "07-15-2023",
        href: "https://theplug-wedding.com",
        images: [
            '/assets/img/project/THEPLUG WEDDING/THEPLUG-Wedding-Mock-up.jpg',
            '/assets/img/project/THEPLUG WEDDING/3.jpg',
            '/assets/img/project/THEPLUG WEDDING/Card Stephane.jpg'
        ],
        component: (props) => <ToastReel {...props} />,
        info: {
            direction: "THEPLUG COM'",
            design: "THEPLUG COM'",
            client: 'THEPLUG WEDDING',
            photography: 'STEPHANE KAMWA'
        }
    },
    {
        id: 3,
        title: "Pulse Live",
        slug: 'pulse-live',
        src: '/assets/video/Pulse live animation logo.mp4',
        category: ['Graphisme', 'Vidéographie', 'Web Design'],
        description: [
            "PULSE LIVE ENTERTAINMENT établit en Allemagne, se distingue en tant que société spécialisée dans la planification de tournées, la production de concerts, de festivals et de spectacles. Fondée par des enthousiastes de musique, elle s'engageà promouvoir la scène musicale africaine, en mettant l'accent sur l'Allemagne, tout en visant une présence remarquable à l'échelle européenne et mondiale",
            "Dans le but d'accentuer la visibilité et la dynamique de leur travail, l'entreprise nous a contactés pour rédefinir son logo, et travailler à la création de leur site internet. L'objectif était de rendre le logo veritablement représentatif de leur entreprise, en mettant en avant son aspect festif et dynamique, avec une touche de glamour, à travers l'utilisation de couleurs vibrantes et d'éléments animés. Le site internet, quant à lui, met en lumière la musique africaine en mettant en avant des visages qui incarnent parfaitement cette richesse culturelle, contribuant ainsi à sa promotion à l&#39;échelle internationale."
        ],
        overlay: 6,
        date: "01-09-2023",
        href: "https://www.pulse-live.de",
        video: {
            poster: '/assets/img/logo/PULSELIVE.png',
            loop: true
        },
        bgVid: '/assets/img/project/Play icon.jpg',
        images: [
            "/assets/video/PULSE LIVE_Website presentation-.mp4",
            "/assets/img/project/Pulse Live/pulselive-Website.jpg",
            "/assets/img/project/Pulse Live/pulselive-Website-1.jpg",
            "/assets/img/project/Pulse Live/compound-slider.jpg"
        ],
        isvideo: true,
        component: (props) => <ToastReel {...props} />,
        info: {
            direction: "PULSE LIVE",
            design: "THEPLUG COM'",
            client: 'PULSE LIVE'
        }
    },
    {
        id: 4,
        title: "Cake By Maman2Noemi",
        slug: 'cake-by-maman2noemi',
        src: '/assets/img/project/Cake By Maman2noemi/Cakebymaman2noemi_Mock-up-1.jpg',
        srcSlider: '/assets/img/project/Cake By Maman2noemi/Cakebymaman2noemi_Mock-up-1.jpg',
        category: ['Graphisme', 'Photographie', 'Web Design'],
        description: [
            "Etablissement de pâtisserie, spécialisé dans le cake design, Cake by Maman2Noemi conçoit pour chacun de ses clients des gâteaux uniques et personnalisés en fonction des préférences, des thèmes et des occasions particulières, avec des ingrédients choisis de façon très précise et méticuleuse pour un goût et une texture unique.",
            "En modernisant son entreprise, notre cliente aspirait à obtenir une identité visuelle et des supports de communication reflétant au mieux ses valeurs fondamentales, à savoir la sobriété, la chaleur et l'élégance. Il était également essentiel de mettre en avant des éléments tels que la gourmandise, la cuisine, la fraîcheur, tout en préservant une touche de modernité qui soit représentative de l'esprit contemporain de sa pâtisserie.",
            "En répondant aux directives de notre cliente, nous lui avons proposé un logo épuré qui met en avant son expertise et la qualité exceptionnelle de ses produits, en utilisant une image de pâtissière dans un cercle. Son site internet reflète parfaitement son identité visuelle, mettant en lumière sa compétence et ses performances à travers des produits dont les photographies ont été réalisées par ThePlug Com', accompagnées d'avis clients."
        ],
        overlay: 6,
        bgVid: '/assets/img/project/Play icon.jpg',
        date: "11-15-2023",
        href: "https://www.maman2noemi.com",
        images: [
            "/assets/video/Website_Presentation_maman2noemi.mp4",
            "/assets/img/project/Cake By Maman2noemi/Cakebymaman2noemi_Mock-up-1.jpg",
            '/assets/img/project/Cake By Maman2noemi/graphic-charter-cakebymaman2noemi_mock-up.jpg',
            "/assets/img/project/Cake By Maman2noemi/Cakebymaman2noemi_Mock-up-2.jpg",
            "/assets/img/project/Cake By Maman2noemi/Cake-by-maman2noemi-website.jpg",
            "/assets/img/project/Cake By Maman2noemi/412_400 2.jpg",
            "/assets/img/project/Cake By Maman2noemi/412_400.jpg",
            "/assets/img/project/Cake By Maman2noemi/633_950 3.jpg",
            "/assets/img/project/Cake By Maman2noemi/Cupcake-3.png",
            "/assets/img/project/Cake By Maman2noemi/gallery2.jpg",
            "/assets/img/project/Cake By Maman2noemi/gallery6.jpg",
            "/assets/img/project/Cake By Maman2noemi/gallery7.jpg",
            "/assets/img/project/Cake By Maman2noemi/gallery9.jpg",
            "/assets/img/project/Cake By Maman2noemi/service-3.jpg",
        ],
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            design: "THEPLUG COM'",
            client: 'SYVIANNE',
            photography: "STEPHANE KAMWA"
        }
    },
    {
        id: 5,
        title: "Esk Translations UG",
        slug: 'esk-translations-ug',
        src: '/assets/img/project/Esk Translations UG/esk-translation-Mock-up.jpg',
        srcSlider: '/assets/img/project/Esk Translations UG/esk-translation-Mock-up.jpg',
        category: ['Graphisme', 'Web Design'],
        description: [
            "ESK TRANSLATIONS UG se positionne en tant qu'agence de traduction offrant des services de qualité exceptionnelle aux entreprises internationales, multinationales, ainsi qu'aux particuliers. Elle veille à ce que ses traductions reflètent parfaitement la vision de ses clients, offrant ainsi une expérience enrichissante, captivante et agréable.",
            "L'entreprise avait besoin d'un site vitrine pour exposer ses divers services et mettre en avant les offres d'une agence de traduction allant au-delà de la simple traduction. Le site met en lumière des services tels que le sous-titrage, la rédaction, la relecture des traductions, l'édition, et bien d'autres prestations que vous pouvez explorer en détail sur la plateforme en ligne."
        ],
        overlay: 6,
        bgVid: '/assets/img/project/Play icon.jpg',
        date: "10-10-2023",
        href: "https://www.esk-translations.com",
        images: [
            "/assets/video/Website_Presentation_ESK translation.mp4",
            "/assets/img/project/Esk Translations UG/esk-translation-Mock-up.jpg",
            "/assets/img/logo/EsK_Translations.png",
            "/assets/img/project/Esk Translations UG/trans.jpg"
        ],
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            design: "THEPLUG COM'",
            client: 'ESTELLE KAMWA'
        }
    },
    {
        id: 6,
        title: "EMD PROD",
        slug: 'emd-prod',
        src: '/assets/img/project/Emd Prod/EMD.jpg',
        srcSlider: '/assets/img/project/Emd Prod/EMD.jpg',
        category: ['Graphisme'],
        description: [
            "EMD PROD, en pleine expansion dans l'industrie musicale, a sollicité notre expertise pour améliorer sa visibilité. Nous avons pris en charge la conception de son logo ainsi que d'autres outils de communication à venir. En tant qu'accompagnateur privilégié de cette entreprise, nous assumons la responsabilité de concevoir ses divers visuels événementiels pour renforcer sa présence sur le marché."
        ],
        overlay: 6,
        bgVid: '/assets/img/project/Play icon.jpg',
        date: "09-01-2023",
        images: [
            "/assets/video/EMD_HD.mp4",
            "/assets/img/project/Emd Prod/EMD.jpg",
            "/assets/img/project/Emd Prod/EMD-logo.jpg",
            "/assets/img/project/Emd Prod/emd-carte.jpg",
            "/assets/img/project/Emd Prod/serges-beynaud-2visual.jpg",
            "/assets/img/project/Emd Prod/serges-beynaud-visual.jpg",
            "/assets/img/project/Emd Prod/Toofan-visual.jpg"
        ],
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'EMD PROD'
        }
    },
    {
        id: 7,
        title: "Madhi",
        slug: 'madhi',
        src: '/assets/img/project/Madhi/Madhi-logo_.jpg',
        srcSlider: '/assets/img/project/Madhi/Madhi-logo_.jpg',
        category: ['Graphisme'],
        description: [
            "Spécialisée dans la promotion et commercialisation de la culture africaine à travers des œuvres artisanales en Europe, l'entreprise MADHI a sollicité nos services pour la conception de son logo. Ce dernier a été conçu tel un réservoir, symbolisant une maison qui abrite la richesse africaine. Il traduit également des valeurs de résistance, de sérieux, et d'autorité, accentuées par l'utilisation de lettres en majuscules."
        ],
        overlay: 6,
        date: "09-01-2023",
        images: [ 
            "/assets/video/madhi animation.mp4",
            "/assets/img/project/Madhi/Madhi-logo_.jpg"
        ],
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'MADHI'
        }
    },
    {
        id: 8,
        title: "NHPC",
        slug: 'nhpc',
        category: ["Graphisme"],
        src: '/assets/img/project/NHPC/Agenda-NHPC.jpg',
        srcSlider: '/assets/img/project/NHPC/Agenda-NHPC.jpg',
        description: [
            "NHPC est une Société Anonyme (SA) de droit camerounais ayant pour mission la conception, le financement, et la construction de l'aménagement hydroélectrique de Nachtigal, situé à 70 km au Nord-Est de Yaoundé. En outre, la société est chargée de la réalisation de la ligne de transport d'énergie entre Nachtigal et Nyom 2, situé au Nord de Yaoundé.",
            "Il est essentiel pour l'entreprise de communiquer et d'informer sur ses missions. C'est pourquoi elle accorde une grande attention à la conception de chacun de ses supports de communication, veillant à ce qu'ils expriment clairement ses missions. Un exemple concret est l'agenda 2024 que nous avons conçu, mettant en avant l'objectif majeur de NHPC pour l'année 2024 : œuvrer pour un Cameroun entièrement éclairé."
        ],
        overlay: 6,
        date: "11-20-2023",
        images: [
            "/assets/img/project/NHPC/Agenda-NHPC.jpg",
            "/assets/img/project/NHPC/Agenda-NHPC-2.jpg",
            "/assets/img/project/NHPC/CALENDIER-MURAL-02-NHPC-2024-SIMULATION.jpg",
            "/assets/img/project/NHPC/CALENDRIER-CHEVALET-01-NHPC-2024-.jpg",
            "/assets/img/project/NHPC/CALENDRIER-CHEVALET-02-NHPC-2024-.jpg",
            "/assets/img/project/NHPC/CALENDRIER-MURAL-01-NHPC-2024-SIMULATION.jpg",
        ],
        component: (props) => <UnderArmour {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'NHPC'
        }
    },
    {
        id: 9,
        title: "SOPLUSLINE",
        slug: 'soplusline',
        src: '/assets/video/FINAL COMP.mp4',
        category: ['Vidéographie'],
        description: [
            "SOPLUSLINE est une entreprise moderne basée à Darmstadt donc la mission première est de promouvoir la transition énergétique et d’aider leurs clients à profiter des nombreux avantages de l’énergie solaire.",
            "Nous avons proposé à notre client un logo animé qui évoque la renaissance, la nature, et l'écologie en utilisant des tons de vert. Cela apporte une touche de fraîcheur et d'éclat, renforcée par des petites bulles de lumières blanches qui se transforment en vert, formant ainsi le nom de l'entreprise. Ce logo exprime également la modernité grâce à l'association du vert et du noir."
        ],
        overlay: 6,
        href: "https://comtheplug.com",
        date: "09-01-2023",
        video: {
            poster: '/assets/video/FINAL COMP.mp4',
            loop: true
        },
        bgVid: '/assets/img/project/Play icon.jpg',
        images: [
            'https://youtu.be/OltI1VpYxFs',
            'https://youtu.be/YgT_nYhYXEE'
        ],
        isvideo: true,
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'SOPLUSLINE'
        }
    },
    {
        id: 10,
        title: "EPIDEAA",
        slug: 'epideaa',
        src: '/assets/video/EPIDEAA animation logo final.mp4',
        category: ['Web Design', 'Graphisme', 'Photographie', 'Vidéographie'],
        description: [
            "EPIDEAA se présente comme le guide idéal pour des vacances aux Maldives, offrant une exploration des trésors naturels de ce paradis terrestre. En tant qu'expert de renom sur cet archipel, il met à la disposition de sa clientèle des services de conseil, de recommandation et de planification d'activités afin de garantir des expériences mémorables et un séjour inoubliable. Les Maldives occupent actuellement une place de choix parmi les 15 destinations les plus prisées à l'échelle mondiale, bénéficiant d'une notoriété considérable. Face à l'affluence de visiteurs et à la multitude de guides disponibles, il est essentiel pour EPIDEAA de se positionner judicieusement dans ce secteur concurrentiel.",
            "Nous avons eu le privilège d'accompagner notre client, EPIDEAA, dans le processus crucial de renforcement de sa visibilité. Ce projet s'est révélé particulièrement gratifiant, car nous avons été chargés de concevoir l'ensemble des supports de communication de l'entreprise. Notre intervention a débuté par la création de l'identité visuelle, englobant la conception dulogotype et de la charte graphique. Ensuite, nous avons élaboré divers supports tels que des brochures, des flyers, des cartes de visite, des roll-ups, ainsi que l’animation du logo (motion design), la réalisation d'une vidéo promotionnelle de l'entreprise, et enfin, le développement du site internet.",
            "Nous avons cherché à mettre en avant la splendeur naturelle des Maldives, incarnée par ses îles et plages, en utilisant les couleurs bleu et blanc. Ces couleurs évoquent également le calme et la sérénité, des valeurs expérientielles cruciales pour les consommateurs en quête de bien-être lors de leur séjour aux Maldives. Pour exprimer le caractère ensoleillé de ces escapades, nous avons intégré une représentation iconique du soleil autour du 'e' dans le nom d'EPIDEAA. Les lignes sinueuses, telles des vagues intégrées au logo, se retrouvent également sur d'autres supports, associées à des photographies des plages et îles, rappelant ainsi la richesse première des Maldives : leur ressource marine. Ces éléments évoquent le dynamisme et le mouvement. EPIDEAA est à la quête de l'excellence au travers des services offerts, pour créer des moments uniques aux Maldives, que nous avons par des cercles, symbolisant la perfection."
        ],
        overlay: 6,
        href: "https://epideaa.com",
        date: "12-01-2024",
        video: {
            poster: '/assets/video/EPIDEAA animation logo final.mp4',
            loop: true
        },
        bgVid: '/assets/img/project/Play icon.jpg',
        images: [
            '/assets/video/Epideaa_video.mp4',
            '/assets/video/EPIDEAA animation logo final.mp4',
            '/assets/img/project/Epideaa/EPIDEAA LOGO OFFICIAL_PP.jpg',
            '/assets/img/project/Epideaa/EPIDEAA-website.jpg',
            '/assets/img/project/Epideaa/epideaa_brochure.jpg',
            '/assets/img/project/Epideaa/ROLL-UP-Epideaa.jpg',
            '/assets/img/project/Epideaa/VISIT-CARD-EPIDEAA.jpg'
        ],
        isvideo: true,
        component: (props) => <ToastReel {...props}/>,
        info: {
            direction: "THEPLUG COM'",
            client: 'EPIPHANIE',
            design: "THEPLUG COM'"
        }
    }
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
    return data.find(item => {
        if (item[whereName] === value) return item;
        return null;
    });
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};