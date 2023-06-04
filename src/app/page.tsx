import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div>
            <Header />
            <main className="py-24">
                <About />
            </main>
            <Footer />
        </div>
    );
};


export default Home;
