export const projects = [
    {
        id: 1,
        title: 'Type Tunes',
        image: '/images/projects/trype-tunes.png',
        imageAlt: '/images/projects/trype-tunes.png',
        description:
      'Projeto front-end Trybe-Tunes feito durante o período de curso da Trybe refeito em typescript. Um site para pesquisar albums de música, permite ouvir amostras das músicas do album e favoritar. Possui um cadastro simples de usuário e salva as informações no local storage do navegador. Consome a api o iTunes para funcionar. As imagens usadas foram geradas por mim usando o model de geração de imagens por inteligência artificial Midjourney.',
        skills: ['React', 'Typescript', 'Styled-Components'],
        github: 'https://github.com/cafe51/Type-Tunes',
        link: 'https://typetunes.vercel.app/',
    },
    {
        id: 2,
        title: 'Api para Blog',
        image: '/images/projects/blog-api.png',
        imageAlt: '/images/projects/project_1.png',
        description:
      'Sistema de back-end completo, robusto e eficiente desenvolvido para gerenciar todas as operações essenciais de um blog, incluindo o registro de usuários, autenticação, criação e gerenciamento de postagens.',
        skills: ['Node.js', 'Typescript', 'Express', 'MySql', 'Sequelize', 'Chai', 'Docker'],
        github: 'https://github.com/cafe51/blog-api.git',
        link: '',
    },
    {
        id: 3,
        title: 'Cadastro de times de futebol',
        image: '/images/projects/tfc2.png',
        imageAlt: '/images/projects/project_1.png',
        description:
      'Api com CRUD completo para cadastro de times de futebol que alimenta uma interface front-end. Inclui cadastro de usuários no banco de dados e login com autenticação.',
        skills: ['React', 'Express', 'MySql', 'Sequelize', 'Chai', 'Docker'],
        github: 'https://github.com/cafe51/trybe-futebol-clube',
        link: 'https://trybe-futebol-clube-japhe.up.railway.app',
    },
    {
        id: 4,
        title: 'Loja de Carros',
        image: '/images/projects/car-shop.png',
        imageAlt: '/images/projects/project_2.png',
        description:
      'Api com CRUD completo para cadastro de carros e motos em um banco de dados não relacional. Inclui cadastro de usuário e login com autenticação. Nesse projeto pratiquei injeção de dependência e as práticas SOLID',
        skills: ['Typescript', 'Express', 'MongoDB', 'Docker'],
        github: 'https://github.com/cafe51/car-shop',
        link: '',
    },
    {
        id: 5,
        title: 'Site Portfolio',
        image: '/images/projects/site-portfolio1.png',
        imageAlt: '/images/projects/site-portfolio1.png',
        description: 'Site feito para divulgação de portfolio de projetos e habilidades de programação que serve como meu cartão de visitas',
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

