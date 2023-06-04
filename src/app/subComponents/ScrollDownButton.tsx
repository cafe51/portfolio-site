interface ScrollDownButtonProps {
  href: string;
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({ href }) => {
    return (
        <div className='flex justify-center'>
            <div className="hover:animate-bounce flex justify-center mt-8">
                <a href={ `${href}` } className="bg-blue-900 rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </div>

    );
};

export default ScrollDownButton;
