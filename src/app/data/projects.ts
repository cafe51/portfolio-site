export const projects = [
    {
        id: 1,
        title: 'Type Tunes',
        image: '/images/projects/trype-tunes.png',
        imageAlt: '/images/projects/trype-tunes.png',
        description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        skills: ['React', 'Typescript', 'Styled-Components'],
        github: 'https://github.com/cafe51/Type-Tunes',
        link: 'google.com',
    },
    {
        id: 2,
        title: 'Api para Blog',
        image: '/images/projects/blog-api.png',
        imageAlt: '/images/projects/project_1.png',
        description:
      'Este projeto é um sistema de back-end completo, robusto e eficiente desenvolvido para gerenciar todas as operações essenciais de um blog, incluindo o registro de usuários, autenticação, criação e gerenciamento de postagens',
        skills: ['Node.js', 'Typescript', 'Express', 'MySql', 'Sequelize', 'Chai'],
        github: 'https://github.com/cafe51/blog-api.git',
        link: '/',
    },
    {
        id: 3,
        title: 'Cadastro de times de futebol',
        image: '/images/projects/tfc2.png',
        imageAlt: '/images/projects/project_1.png',
        description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        skills: ['React', 'Express', 'MongoDB'],
        github: 'https://github.com/cafe51/trybe-futebol-clube',
        link: '',
    },
    {
        id: 4,
        title: 'Car de Shop',
        image: '/images/projects/car-shop.png',
        imageAlt: '/images/projects/project_2.png',
        description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        skills: ['Express', 'MongoDB'],
        github: 'https://github.com/cafe51/car-shop',
        link: '',
    },
    {
        id: 5,
        title: 'Site Portfolio',
        image: '/images/projects/site-portfolio1.png',
        imageAlt: '/images/projects/site-portfolio1.png',
        description: 'Site feito para divulgação de portfolio de projetos e habilidades de programação',
        skills: ['React', 'Next.js', 'Typescript', 'Tailwind'],
        github: 'https://github.com/cafe51/portfolio-site.git',
        link: '/',
    },
];

export type ProjectData = {
    id: number,
    title: string,
    image: string,
    imageAlt: string,
    description: string,
    skills: string[],
    github: string,
    link: string,
}

