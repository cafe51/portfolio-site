import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import { NextPage } from 'next';
import Skills from './components/Skills';
import Projects from './components/Projects';

const Home: NextPage = () => {
    return (
        <div>
            <Header />
            <main className="py-16">
                <About />
                <Skills />
                <Projects />
            </main>
            <Footer />
        </div>
    );
};


export default Home;
