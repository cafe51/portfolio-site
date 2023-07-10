import CarShopHeader from './CarShopHeader';
import CarShop from './CarShop';

export default function Home() {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <CarShopHeader />
            <section className='w-full bg-gray-200 flex flex-col items-center px-4 pt-4'>
                <div className='flex flex-col items-center justify-center text-center md:w-3/5 '>
                    <h1>Bem vindo à loja de Carros!</h1>
                    <p>Essa é uma interface feita para interagir com a API que eu desenvolvi, abaixo você pode interagir com os cards editando, criando e excluindo. Todas as ações fazem requisições a API que está online. Abaixo os links para a API e para o repositório com o código fonte</p>
                </div>
            </section>
            <div className='text-start bg-gray-200 px-4 flex flex-col gap-2 pb-4'>
                <p><strong>API:</strong> <a className='text-blue-600 underline' href='https://car-shop-japhe.up.railway.app/'>https://car-shop-japhe.up.railway.app/</a></p>
                <p><strong>Repositório:</strong> <a className='text-blue-600 underline' href='https://github.com/cafe51/car-shop'>https://github.com/cafe51/car-shop</a></p>
            </div>
            <CarShop />
        </div>
    );
}
