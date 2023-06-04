import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">
          Desenvolvido por Japhé Nogueira
                </p>
                <div>
                    <Link href="https://github.com/" className="text-white hover:text-gray-300 mx-2" target="_blank" rel="noopener noreferrer">
            GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/" className="text-white hover:text-gray-300 mx-2" target="_blank" rel="noopener noreferrer">
            LinkedIn
                    </Link>
                    <Link href="https://twitter.com/" className="text-white hover:text-gray-300 mx-2" target="_blank" rel="noopener noreferrer">
            Twitter
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
