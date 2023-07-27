import { ImSpinner9 } from 'react-icons/im';


export default function LoadingForm() {
    return (
        <section className="flex flex-col gap-2 p-4 text-center bg-gray-200 rounded shadow md:w-1/2 lg:1/4">
            <form
                className='flex flex-col gap-2 '
                name={ 'loading-form' }
                method="post"
            >
                <div className="flex flex-col gap-4 px-4">
                    <label className='' htmlFor="title">
                        <input
                            className='w-full p-1 text-3xl text-center bg-white animate-pulse'
                            type="text"
                            name="title"
                            disabled
                        />
                    </label>
                    <label className='' htmlFor="content">
                        <textarea
                            className='w-full p-2 bg-white animate-pulse'
                            name="content"
                            minLength={ 1 }
                            maxLength={ 300 }
                            rows={ 5 }
                            disabled
                        />
                    </label>
                    <div className='self-center w-4/5 text-xs text-white bg-white animate-pulse'>.</div>
                    <div className='w-full p-1 text-white bg-white animate-pulse'>.</div>
                    
                </div>

                <div className="flex justify-end">
                    { (
                        <button 
                            type="submit"
                            className='flex justify-center p-3 text-white bg-gray-300 rounded px-9'
                            disabled={ true }
                        >
                            < ImSpinner9 className="text-gray-500 animate-spin"/>
                        </button>
                    ) }
                </div>
            </form>
        </section>
    );
}
