import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";
import Work7 from "./assets/project-7.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  //icone page Maison 
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },
  //icone page About
  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },
  //icone page Portfolio 
  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },
  //icone page Contact
  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Prénom : ",
    description: "Arnaud",
  },

  {
    id: 2,
    title: "Nom : ",
    description: "Dessaint",
  },

  {
    id: 3,
    title: "Age : ",
    description: "33 ans",
  },

  {
    id: 4,
    title: "Nationalité : ",
    description: "Français",
  },

  // {
  //   id: 5,
  //   title: 'Freelance : ',
  //   description: 'Available',
  // },

  {
    id: 6,
    title: "Addresse : ",
    description: "France",
  },

  {
    id: 7,
    title: "Téléphone : ",
    description: "06 74 40 67 06",
  },

  {
    id: 8,
    title: "Email : ",
    description: "arnauddevv@outlook.fr",
  },

  // {
  //   id: 9,
  //   title: 'Skype : ',
  //   description: 'steve.milner',
  // },

  {
    id: 10,
    title: "Langue : ",
    description: "Français",
  },
];

export const stats = [
  {
    id: 1,
    no: "2",
    title: "Ans  <br /> Experience",
  },

  {
    id: 2,
    no: "3+",
    title: "Projets <br /> Réalisés",
  },

  // {
  //   id: 3,
  //   no: '81+',
  //   title: 'Happy <br /> Customers',
  // },

  // {
  //   id: 4,
  //   no: '53+',
  //   title: ' Awards <br /> Won',
  // },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2012 - 2020",
    title:
      "Back Up - Adjoin chef de service <span> Flauraud - Clermont-Ferrand </span>",
    desc: <>
      - Gestion des heures salariales
      <br />
      - Gestion des consignes et non-conformités
      <br />
      - Gestion des envois/retours fournisseurs
      <br />
      - Gestion des garanties
      <br />
      - Contrôle qualité / conformité

    </>,
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2011 - 2012",
    title: "Préparateur de commandes <span> ELIS - Aubière </span>",
    desc: <>
      - Préparateur de commandes
      <br />
      - Chargement des camions
    </>
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2009 - 2010",
    title:
      "Poseur - Décorateur - Marbreline <span> 3D Revêtement - Clermont-Ferrand </span>",
    desc: <>
      - Préparation du chantier
      <br />
      - Pose de marbre
      <br />
      - Nettoyage du chantier

    </>
  },

  {
    id: 4,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2009 - 2010",
    title:
      "Façadier - Poseur - Isolateur <span> DMH - Clermont- Ferrand </span>",
    desc: (
      <>
        - Préparation du chantier
        <br />
        - Isolation des façades
        <br />
        - Pose d'enduit et toile
        <br />
        - Finition crépit
        <br />
        - Nettoyage du chantier
      </>
    ),
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023 - 2024 - En cours",
    title: "Concepteur Développeur d'application <span> Alt  - Pacé </span>",
    desc: "Formation concepteur développeur d'application"
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022 - 2023",
    title: "Développeur Web et Web mobile <span> M2I Formation - Lyon </span>",
    desc: "Formation développement web et web mobile"
  },
  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020 - 2022",
    title: "AutoDidact Développement Web<span> Domicile </span>",
    desc: (
      <>
        Auto Formation à la maison sur plusieurs domaine du web
        <br />
        - HTML
        <br />
        - CSS
        <br />
        - JAVASCRIPT
        <br />
        - VUE JS
        <br />
        - PHP
        <br />- MySQL
      </>
    ),
  },

  {
    id: 8,
    category: "stage",
    icon: <VscAccount />,
    year: "Mars - 2023",
    title: "Développement Web<span> Domicile </span>",
    desc: (
      <>
        Création d'une maquette (application)
        <br />
        - Utilisation: Framwork,
        <br />
        React
        <br />
        Symfony
        <br />
        ApiPlatform
        <br />
        Création de l'application
      </>
    ),
  },

  {
    id: 9,
    category: "stage",
    icon: <VscAccount />,
    year: "Mars - 2022",
    title: "Développement Web<span> Domicile </span>",
    desc: (
      <>
        Création d'une maquette (application)
        <br />
        - Utilisation: Framwork : VueJs
      </>
    ),
  },

];

export const skills = [
  {
    id: 1,
    title: "Html - CSS",
    percentage: "100",
  },

  {
    id: 2,
    title: "MySQL",
    percentage: "70",
  },

  {
    id: 3,
    title: "Javascript",
    percentage: "70",
  },
  {
    id: 4,
    title: "GitLab - Github",
    percentage: "60",
  },
  {
    id: 5,
    title: "Php - Symfony",
    percentage: "60",
  },

  {
    id: 6,
    title: "React",
    percentage: "60",
  },

  {
    id: 7,
    title: "Bootstrap Tailwind",
    percentage: "60",
  },

  {
    id: 8,
    title: "TypeScript Express",
    percentage: "60",
  },
  {
    id: 9,
    title: "NodeJs ",
    percentage: "60",
  },
  {
    id: 10,
    title: "ApiPlatform",
    percentage: "50",
  },

  {
    id: 11,
    title:
      <>
        CMS :
        <br />
        - Wordpress
        <br />
        - Prestashop
      </>,
    percentage: "50",
  },
  {
    id: 12,
    title: "Mongo DB",
    percentage: "50",
  }



];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Parent d'éléves",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Site parent d'éleve réaliser en cours de formation",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Personnel",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "PHP",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <>
          <a href="http://dessaint-arnaud.alwaysdata.net/">Visiter le site</a>
        </>,
      },
      {
        icon: <FiExternalLink />,
        title: "Github : ",
        desc: <>
          <a href="https://github.com/ArnaudDes63/Parent_eleve">Visiter le site</a>
        </>,
      },
    ],
  },
];

export const github = [
  {
    id: 1,
    title: 'Repositories',
    details: [
      {
        title: "Liste des taches",
        desc: "Projet réaliser avec un tuto",
        view: <>
          <a href="https://github.com/ArnaudDes63/listedestaches">Visiter le Repositories Git</a>
        </>
      },
      {
        title: "Menu Decouverte",
        desc: "Site développer avec la formation de Enzo ( développeur du web )",
        view: <>
          <a href="https://github.com/ArnaudDes63/menuDecouverte">Visiter le Repositories Git</a>        
        </>
      },
      {
        title: "Chronometre",
        desc: "Chronometre realiser en javascript html css",
        view: <>
          <a href="https://github.com/ArnaudDes63/chronometre">Visiter le Repositories Git</a>
        </>
      },
      {
        title: "Cube3D",
        desc: "Cube 3d réaliser en debut de reconversion avec youtube ",
        view: <>
          <a href="https://github.com/ArnaudDes63/cube3d">Visiter le Repositories Git</a>
        </>
      },
      {
        title: "YeuxQuiBouge",
        desc: "Projet réaliser avec le tuto de Enzo ( le développeur du web ) sur youtube",
        view: <>
          <a href="https://github.com/ArnaudDes63/yeuxquibouge">Visiter le Repositories Git</a>
        </>
      },
      {
        title: "Calculette",
        desc: "Calculette réaliser avec un tuto youtube",
        view: <>
          <a href="https://github.com/ArnaudDes63/Modern-Calculator-App">Visiter le Repositories Git</a>
        </>
      },
      {
        title: "My Web Site",
        desc: "Portfolio de mon site perso avec cv, et info",
        view: <>
          <a href="https://github.com/ArnaudDes63/webSiteDessaintArnaud">Visiter le Repositories Git</a>
        </>
      },
    ]

  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
