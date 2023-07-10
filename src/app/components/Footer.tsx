import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">
          Desenvolvido por Japhé Nogueira
                </p>
                <div>
                    <Link href="https://github.com/cafe51/" className="text-white hover:text-gray-300 mx-2" target="_blank" rel="noopener noreferrer">
            GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/japhe-full-stack/" className="text-white hover:text-gray-300 mx-2" target="_blank" rel="noopener noreferrer">
            LinkedIn
                    </Link>
                    <Link href={ '/japhe-cv.pdf' } className="text-white hover:text-gray-300 mx-2" rel="noopener noreferrer">
            Currículo
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
