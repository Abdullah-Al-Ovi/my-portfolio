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
import Work1 from './src/assets/project-1.jpeg';
import Work2 from './src/assets/project-2.jpg';
import Work3 from './src/assets/project-3.jpeg';

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
    name: 'Projects',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/myworks',
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
    title: 'First Name : ',
    description: 'Abdullah',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Ovi',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Bangladeshi',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'N/A',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Barishal,Bangladesh',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+880 01754448783',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'abdullah.ovi098@gmail.com',
  },



  {
    id: 9,
    title: 'Languages : ',
    description: 'Bangla, English,Hindi',
  },
];

export const stats = [
  {
    id: 1,
    no: 'N/A',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: 'N/A',
    title: 'Happy <br /> Clients',
  },

  {
    id: 4,
    no: 'N/A',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'October,2023',
    title: 'Project <span> Trend Junction </span>',
    desc: 'Is is basically an online shopping platform from where people can purchase products of Adidas,Nike,Levis,Puma '
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'November,2023',
    title: 'Project <span> PageTurner Library </span>',
    desc: 'It is an online based library management system from where validate user can issue books to borrow and return.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'December,2023',
    title: 'Project <span> Shop Sync </span>',
    desc: 'This web application is for those who wants to manage their shop with much relaxation and less effort.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-2024',
    title: 'Computer Science <span> Barishal University </span>',
    desc: `Currently Studying with CGPA 3.20`,
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'Higher Secondary <span> Hatem Ali College,Barishal </span>',
    desc: `
    GPA: 4.94`,
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'Secondary <span> Barishal Zila School </span>',
    desc: `GPA: 5.00 <br> With Divisional Scholarship.`,
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '89',
  },

  {
    id: 2,
    title: 'CSS',
    percentage: '84',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '82',
  },

  {
    id: 4,
    title: 'React',
    percentage: '90',
  },

  {
    id: 5,
    title: 'NodeJs',
    percentage: '30',
  },

  {
    id: 6,
    title: 'MongoDB',
    percentage: '50',
  },

  {
    id: 7,
    title: 'MySql',
    percentage: '70',
  }
 
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Trend Junction',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'N/A',
      },
      {
        icon: <FaCode />,
        title: 'Frontend : ',
        desc: 'ReactJs,Firebase',
      },
      {
        icon: <FaCode />,
        title: 'Backend : ',
        desc: 'NodeJs,MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live  : ',
        desc: `<a target='_black' href='https://trend-junction-shop.surge.sh/'>Click Here</a>`,
      },
      {
        icon: <FiExternalLink />,
        title: 'Client Code  : ',
        desc: `<a target='_black' href='https://github.com/Abdullah-Al-Ovi/trend-junction-client'>Click Here</a>`,
      },
      {
        icon: <FiExternalLink />,
        title: 'Server Code  : ',
        desc: `<a target='_black' href='https://github.com/Abdullah-Al-Ovi/trend-junction-server'>Click Here</a>`,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Shop Sync',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'N/A',
      },
      {
        icon: <FaCode />,
        title: 'Frontend : ',
        desc: 'ReactJs,Firebase',
      },
      {
        icon: <FaCode />,
        title: 'Backend : ',
        desc: 'NodeJs,MongoDB,JWT',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live  : ',
        desc: `<a target='_black' href='https://shopsync.surge.sh/'>Click Here</a>`,
      },
      {
        icon: <FiExternalLink />,
        title: 'Client Code  : ',
        desc: `<a target='_black' href='https://github.com/Abdullah-Al-Ovi/shop-sync-client'>Click Here</a>`,
      },
      {
        icon: <FiExternalLink />,
        title: 'Server Code  : ',
        desc: `<a target='_black' href='https://github.com/Abdullah-Al-Ovi/shop-sync-server'>Click Here</a>`,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'PageTurner Library',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'N/A',
      },
      {
        icon: <FaCode />,
        title: 'Frontend : ',
        desc: 'ReactJs,Firebase',
      },
      {
        icon: <FaCode />,
        title: 'Backend : ',
        desc: 'NodeJs,MongoDB,JWT',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live  : ',
        desc: `<a target='_black' href='https://pageturnerlibrary.surge.sh/'>Click Here</a>`,
      },
      {
        icon: <FiExternalLink />,
        title: 'Client Code  : ',
        desc: `<a target='_black' href='https://github.com/Abdullah-Al-Ovi/pageturner-library-client'>Click Here</a>`,
      },
      {
        icon: <FiExternalLink />,
        title: 'Server Code  : ',
        desc: `<a target='_black' href='https://github.com/Abdullah-Al-Ovi/pageturner-library-server'>Click Here</a>`,
      },
    ],
  }
];



