/* eslint-disable react/jsx-curly-spacing */
import Image from 'next/image';
import { FiDownload, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

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

// const size = '400px';

function title(texto: string) {
    return texto.split(' ').map(function(palavra) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    }).join(' ');
}

const CertificatesCard = ({ assetData }: CertificatesCardProps) => {
    return (
        <div className={`
        bg-gray-200
        rounded
        shadow flex
        flex-col
        items-center
        justify-start
        text-center
        p-2
        w-[300px]
        h-[400px]
        `}>
            <div
                className="relative w-full"
                style={ { paddingBottom: '60.00% ' } }
            >
                <Image
                    src={ assetData.image }
                    alt={ assetData.imageAlt }
                    fill
                    style={ { objectFit: 'cover' } }
                    className="rounded"
                />
            </div>
            <div className="text-xl font-semibold mt-4 px-4 h-3/4">
                <h3>{ title(assetData.title) }</h3>
            </div>
            <div className='mt-2 flex flex-col items-center h-full justify-between text-center'>
                <p className="text-gray-600 px-4 md:p-0">{ assetData.description }</p>
                <div className="flex p-4">
                    <Link href={ assetData.pdfFile } download className="mr-4" target="_blank" rel="noopener noreferrer">
                        <FiDownload color="black" size={ 24 }/>
                    </Link>
                    <Link href={ assetData.link } target="_blank" rel="noopener noreferrer">
                        <FiExternalLink color="black" size={ 24 }/>
                    </Link>
                </div>                
            </div>
        </div>

    );
};

export default CertificatesCard;
