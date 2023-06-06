import Image from 'next/image';
import Link from 'next/link';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

type CertificatesCardProps = {
    assetData : {
        title: string,
        image: string,
        imageAlt: string,
        description: string,
        link: string,
        pdfFile: string,
    },
}

const CertificatesCard = ({ assetData }: CertificatesCardProps) => {
    return (

        <div className="bg-gray-100 p-6 rounded shadow flex flex-col justify-between items-center transition-transform duration-500 ease-in-out transform hover:scale-110 relative z-10">
            <Image
                src={ assetData.image }
                alt={ assetData.imageAlt }
                width={ 400 }
                height={ 200 }
                className='transition-transform duration-500 ease-in-out transform hover:scale-110'
            />
            <h3 className="text-xl font-semibold mt-4">{ assetData.title }</h3>
            <p className="text-gray-600 mt-2">{ assetData.description }</p>
            <div className="flex p-4">
                <a href={ assetData.pdfFile } download className="mr-4">
                    <FiDownload color="black" size={ 24 }/>
                </a>
                <Link href={ assetData.link }>
                    <FiExternalLink color="black" size={ 24 }/>
                </Link>
            </div>
        </div>

    );
};

export default CertificatesCard;
