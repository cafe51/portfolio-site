import { useEffect, useRef } from 'react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const navItemsStyle = 'text-white hover:text-gray-800 hover:bg-gray-200 transition-colors duration-300 p-2';

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    const node = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (node.current?.contains(e.target)) {
                return;
            }
            setIsMenuOpen(false);
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchmove', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchmove', handleClickOutside);
        };
    }, [isMenuOpen, setIsMenuOpen]);

    return (
        <nav ref={ node } className={
            `
            sm:w-1/3
            transition-all
            duration-500
            fixed w-2/5
            h-screen
            z-40
            top-14
            right-0
            transform
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:w-2/5
            md:translate-x-0
            md:static
            md:h-auto
            py-4`
        }>
            <div className="nav-gradient">
                <div className="flex flex-col space-y-8 py-4 px-6 md:flex-row md:space-y-0 md:space-x-4 md:py-0 md:px-0">
                    <a href="#about" onClick={ () => setIsMenuOpen(false) } className={ navItemsStyle }>Início</a>
                    <a href="#skills" onClick={ () => setIsMenuOpen(false) } className={ navItemsStyle }>Habilidades</a>
                    <a href="#projects" onClick={ () => setIsMenuOpen(false) } className={ navItemsStyle }>Projetos</a>
                    <a href="#certificates" onClick={ () => setIsMenuOpen(false) } className={ navItemsStyle }>Certificações</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
