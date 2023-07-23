export default function SignUp() {
    return(
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <section className='flex flex-col items-center justify-center bg-gray-200 rounded shadow md:w-2/5 p-6'>
                <h1>Crie sua conta</h1>
                <form className='flex flex-col gap-10 p-6 justify-center items-center'>
                    <div className="w-full">
                        <label className='flex gap-4'>
                            <input
                                className="text-center w-full text-xl"
                                type='text'
                                placeholder="nome"
                            />
                        </label>
                    </div>
                    <div className="w-full">
                        <label className='flex gap-4'>
                            <input
                                className="text-center w-full text-xl"
                                type='email'
                                placeholder="email"
                            />
                        </label>
                    </div>
                    <div className="w-full">
                        <label className='flex gap-4'>
                            <input
                                className="text-center w-full text-xl"
                                type='password'
                                placeholder="senha"
                            />
                        </label>
                    </div>
                    <div className="w-full">
                        <label className='flex gap-4'>
                            <input
                                className="text-center w-full text-xl"
                                type='password'
                                placeholder="repita a senha"
                            />
                        </label>
                    </div>
                    <button className='p-2 w-full text-white rounded bg-blue-600 hover:bg-blue-800'>Pronto</button>
                </form>
                <div className="w-full">
                    <p>Já tem uma conta? <a className='text-blue-500' href="/blogapi/login">Entrar</a></p>
                </div>
            </section>
        </div>
    );
}