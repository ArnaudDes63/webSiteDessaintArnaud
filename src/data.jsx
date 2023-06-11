import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Prénom : ',
    description: 'Arnaud',
  },

  {
    id: 2,
    title: 'Nom : ',
    description: 'Dessaint',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '33 ans',
  },

  {
    id: 4,
    title: 'Nationalité : ',
    description: 'Français',
  },

  // {
  //   id: 5,
  //   title: 'Freelance : ',
  //   description: 'Available',
  // },

  {
    id: 6,
    title: 'Addresse : ',
    description: 'France',
  },

  {
    id: 7,
    title: 'Téléphone : ',
    description: '0674406706',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'arnauddevv@outlook.fr',
  },

  // {
  //   id: 9,
  //   title: 'Skype : ',
  //   description: 'steve.milner',
  // },

  {
    id: 10,
    title: 'Langue : ',
    description: 'Français',
  },
];

export const stats = [
  {
    id: 1,
    no: '1',
    title: 'Ans  <br /> Experience',
  },

  {
    id: 2,
    no: '3+',
    title: 'Projets <br /> Réalisés',
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
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2012 - 2020',
    title: 'Back Up - Adjoin chef de service <span> Flauraud - Clermont-Ferrand </span>',
    desc: 'Gestion des heures salariales - Gestion des consignes et non-conformités - Gestion des envois/retours fournisseurs - Gestion des garanties - Contrôle qualité / conformité.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2011 - 2012',
    title: 'Préparateur de commandes <span> ELIS - Aubière </span>',
    desc: 'Préparateur de commandes - chargement des camions.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2009 - 2010',
    title: 'Poseur - Décorateur - Marbreline <span> 3D Revêtement - Clermont-Ferrand </span>',
    desc: 'Préparation du chantier - pose de marbre - nettoyage du chantier',
  },

  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2009 - 2010',
    title: 'Façadier - Poseur - Isolateur <span> DMH - Clermont- Ferrand </span>',
    desc: `Préparation du chantier - isolation des façades - pose d'enduit et toile - finition crépit - nettoyage du chantier `,
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020 - 2022',
    title: 'AutoDidact Développement Web<span> Domicile </span>',
    desc: 'Auto Formation à la maison sur plusieur domaine du web - HTML / CSS / JAVASCRIPT / VUE JS / PHP / MySQL',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022 - 2023',
    title: 'Développeur Web et Web mobile <span> M2I Formation - Lyon </span>',
    desc: 'Formation développement web et web mobile',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '80',
  },

  {
    id: 2,
    title: 'CSS',
    percentage: '70',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '60',
  },

  {
    id: 5,
    title: 'React',
    percentage: '60',
  },

  {
    id: 6,
    title: 'Symfony',
    percentage: '50',
  },

  {
    id: 7,
    title: 'ApiPlatform',
    percentage: '50',
  },  

  {
    id: 8,
    title: 'NodeJs',
    percentage: '40',
  },

  
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
