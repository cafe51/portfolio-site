import ExpandButton from './ExpandButton';
import ScrollDownButton from './ScrollDownButton';

export type GenericSectionProps<T> = {
  tagName: string,
  assetName: string,
  assetData: T[],
  AssetCard: React.FC<{ assetData: T }>,
  expanded: boolean,
  showLess?: () => void,
  showMore?: () => void,
  nextSection: string,
  maxHeight: string,
}

const GenericSection = <T, >({
    tagName,
    assetName,
    assetData,
    AssetCard,
    expanded,
    showLess,
    showMore,
    nextSection,
    maxHeight,
}: GenericSectionProps<T>) => {
    const styleForSmallCards = 'flex flex-wrap justify-center gap-6 md:w-2/3';
    // const styleForSmallCards = 'grid grid-cols-2 sm:grid-cols-4 gap-6';
    const styleForBigCards = 'flex flex-wrap justify-center gap-6 md:full';
    // const styleForBigCards = `grid grid-cols-1 md:grid-cols-${assetsInARow - 1} lg:grid-cols-${assetsInARow} gap-8`;

    const cardStyle =  tagName === 'skills' ? styleForSmallCards : styleForBigCards;

    return (
        <section id={ tagName } className="bg-gray-200 p-4 pt-14 lg:pt-20 md:pt-20 md:p-8 lg:p-8 relative shadow-xl rounded-md">
            <div className="absolute bg-blue-900 w-fit p-3 text-white">
                <h1 >{ assetName }</h1>
            </div>
            <div className="bg-white mx-auto p-8 rounded-xl flex flex-col items-center">
                <div className={ `${expanded ? 'max-h-[8000px]' : maxHeight} ${cardStyle} overflow-hidden transition-all duration-500 pt-8 md:p-8 mt-8 ` }>
                    { assetData.map((asset: any) => (
                        <div key={ asset.id }>
                            <AssetCard assetData={ asset } />
                        </div>
                    )) }
                </div>

                <ExpandButton
                    expanded={ expanded }
                    onExpand={ showMore }
                    onCollapse={ showLess }
                />

            </div>
            <ScrollDownButton href={ `#${nextSection}` } />
        </section>
    );
};

export default GenericSection;
