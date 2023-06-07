export const projects = [
    {
        id: 1,
        title: 'Api para Blog',
        image: '/images/projects/project_1.png',
        imageAlt: '/images/projects/project_1.png',
        description:
      'Este projeto é um sistema de back-end completo, robusto e eficiente desenvolvido para gerenciar todas as operações essenciais de um blog, incluindo o registro de usuários, autenticação, criação e gerenciamento de postagens',
        skills: ['Node.js', 'Typescript', 'Express', 'MySql', 'Sequelize', 'Chai'],
        github: 'https://github.com/cafe51/blog-api.git',
        link: '/',
    },
    {
        id: 2,
        title: 'Loja de carros',
        image: '/images/projects/project_2.png',
        imageAlt: '/images/projects/project_2.png',
        description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        skills: ['Express', 'MongoDB'],
        github: '/',
        link: 'google.com',
    },
    {
        id: 3,
        title: 'Cadastro de times de futebol',
        image: '/images/projects/project_1.png',
        imageAlt: '/images/projects/project_1.png',
        description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        skills: ['React', 'Express', 'MongoDB'],
        github: '/',
        link: 'google.com',
    },
    {
        id: 4,
        title: 'Cadastro de times de futebol',
        image: '/images/projects/project_3.png',
        imageAlt: '/images/projects/project_3.png',
        description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        skills: ['React', 'Express', 'MongoDB'],
        github: '/',
        link: 'google.com',
    },
    {
        id: 5,
        title: 'Cadastro de times de futebol',
        image: '/images/projects/project_3.png',
        imageAlt: '/images/projects/project_3.png',
        description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        skills: ['React', 'Express', 'MongoDB'],
        github: '/',
        link: 'google.com',
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

