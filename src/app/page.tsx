import Header from './components/Header';
import Footer from './components/Footer';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div>
            <Header />
            <main className="py-24">
                <p>Olá, mundo </p>
            </main>
            <Footer />
        </div>
    );
};


export default Home;
