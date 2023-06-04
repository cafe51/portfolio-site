import Header from './components/Header';
import { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
    return (
        <div>
            <Header />
            <main>
                Olá, mundo
            </main>
        </div>
    );
};


export default Home;
