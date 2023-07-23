export const mockAppState = {
    categoriesReducer: {
        categoriesFromApi: [
            {
                id: 1,
                name: 'Inovação',
            },
            {
                id: 2,
                name: 'Escola',
            },
        ], // Insira os dados mockados desejados aqui
    },
    postsReducer: {
        postsFromApi: [
            {
                id: 1,
                title: 'Post do Ano',
                content: 'Melhor post do ano',
                user_id: 1,
                published: '2011-08-01T19:58:00.000Z',
                updated: '2011-08-01T19:58:51.000Z',
                users: {
                    id: 1,
                    display_name: 'Lewis Hamilton',
                    email: 'lewishamilton@gmail.com',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
                },
                categories: [
                    {
                        id: 1,
                        name: 'Inovação',
                    },
                ],
            },
            {
                id: 2,
                title: 'Vamos que vamos',
                content: 'Foguete não tem ré',
                user_id: 1,
                published: '2011-08-01T19:58:00.000Z',
                updated: '2011-08-01T19:58:51.000Z',
                users: {
                    id: 1,
                    display_name: 'Lewis Hamilton',
                    email: 'lewishamilton@gmail.com',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
                },
                categories: [
                    {
                        id: 2,
                        name: 'Escola',
                    },
                ],
            },
        ],
    },
};
