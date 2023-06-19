/* eslint-disable react/jsx-curly-spacing */
import { NextPage } from 'next';
import ScrollDownButton from '../subComponents/ScrollDownButton';
import Image from 'next/image';

const About: NextPage = () => {
    return (
        <section id="about" className="bg-gray-200 p-4 pt-14 lg:pt-20 md:pt-20 md:p-8 lg:p-8 relative shadow-xl rounded-md md:h-full">

            <div className="absolute bg-blue-900 w-fit p-3 text-white md:p-6 rounded z-10">
                <h1 className='md:text-5xl'>Sobre Mim</h1>
            </div>

            <div className="bg-white flex justify-center items-center rounded-xl md:h-[80vh]">
                <div className="flex flex-col items-center justify-start md:justify-center h-full ">
                    <div className="w-full flex flex-col items-center md:justify-start md:h-full lg:justify-center lg:h-auto md:flex-row lg:items-stretch">
                        
                        <div
                            className={`
                            relative
                            w-[300px]
                            sm:w-[400px]
                            md:w-[450px]
                            pb-[70%]
                            sm:pb-[45%]
                            md:pb-[50%]
                            lg:pb-[28%]
                            min-[1930px]:pb-[18%]
                            
                            
                            `}
                        >
                            <Image
                                src='/images/xxx1.png'
                                alt='About Me Photo'
                                fill
                                style={ { objectFit: 'cover' } }
                                
                                className="
                                sm:pl-[30px]
                                
                                lg:pr-0
                                rounded-tl-[500px]
                                md:rounded-tr-[100px]
                                rounded-br-[300px]
                                rounded-bl-[200px]"
                                
                            />
                        </div>


                        <div className='flex flex-col justify-center items-center text-center md:text-start px-4 p-4 md:mt-2 lg:mt-0 md:w-3/6 lg:w-2/6'>
                            <h2>Olá, mundo!</h2>
                            <p>
                                Sou um apaixonado por literatura, One Piece, Nintendo Switch e Red Hot Chilli Peppers, nessa ordem. Já morei em nove estados brasileiros e três anos em Portugal, vendendo desenhos enquanto decidia entre arquitetura e engenharia. Eu não tinha dinheiro pra ter um pc gamer, mas acabei ganhando no jogo das criptomoedas e me tornei um programador full stack, amante de JavaScript, mas se apaixonando por Python.
                                Aprendi inglês do jeito nerd: jogando e ouvindo música.
                                Podemos conversar melhor: <a className='font-bold text-blue-800'href='#contact'>entre em contato comigo</a>, será um prazer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollDownButton href="#skills" />
        </section>
    );
};

export default About;
