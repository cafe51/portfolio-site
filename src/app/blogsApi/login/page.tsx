export default function Login() {
    return(
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <section className='bg-gray-200 rounded shadow md:w-2/5'>
                <form className='flex flex-col gap-10 p-6 justify-center items-center'>
                    <div>
                        <label className='flex gap-4'>
                            <h2>e-mail</h2>
                            <input
                                className="text-center"
                                type='text'
                            />
                        </label>
                    </div>
                    <div>
                        <label className='flex gap-4'>
                            <h2>senha</h2>
                            <input
                                className="text-center"
                                type='text'
                            />
                        </label>
                    </div>
                </form>
            </section>
        </div>
    );
}