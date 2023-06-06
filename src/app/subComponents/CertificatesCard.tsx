import Image from 'next/image';
import Link from 'next/link';

type CertificatesCardProps = {
    assetData : {
        title: string,
        image: string,
        imageAlt: string,
        description: string,
        link: string,
    },
}

const CertificatesCard = ({ assetData }: CertificatesCardProps) => {
    return (

        <div className="bg-gray-100 p-4 rounded shadow flex flex-col justify-between items-center transition-transform duration-500 ease-in-out transform hover:scale-110 relative z-10">
            <Image
                src={ assetData.image }
                alt={ assetData.imageAlt }
                width={ 400 }
                height={ 200 }
                className='transition-transform duration-500 ease-in-out transform hover:scale-110'
            />
            <h3 className="text-xl font-semibold mt-4">{ assetData.title }</h3>
            <p className="text-gray-600 mt-2">{ assetData.description }</p>
            <Link href={ assetData.link } className="text-blue-500 hover:text-blue-700 mt-2 inline-block focus:outline-none focus:ring-2 focus:ring-blue-500">
                  AAAAAAA
            </Link>
        </div>

    );
};

export default CertificatesCard;
