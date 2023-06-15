import ExpandButton from './ExpandButton';
import ScrollDownButton from './ScrollDownButton';

export type GenericSectionProps<T> = {
  tagName: string,
  assetName: string,
  assetData: T[],
  initialNumberOfAssets: number,
  assetsInARow: number;
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
    initialNumberOfAssets,
    AssetCard,
    expanded,
    showLess,
    showMore,
    nextSection,
    maxHeight,
    assetsInARow,
}: GenericSectionProps<T>) => {
    const styleForSmallCards = 'grid grid-cols-2 sm:grid-cols-4 gap-6';
    const styleForBigCards = `grid grid-cols-1 md:grid-cols-${assetsInARow - 1} lg:grid-cols-${assetsInARow} gap-8`;

    const cardStyle =  initialNumberOfAssets === 4 ? styleForSmallCards : styleForBigCards;

    return (
        <section id={ tagName } className="bg-gray-200 p-4 md:p-8 lg:p-8 relative shadow-xl rounded-md">
            <div className="absolute bg-blue-900 w-fit p-3 text-white">
                <h1 >{ assetName }</h1>
            </div>
            <div className="bg-white mx-auto p-8 rounded-xl">
                <div className={ `${expanded ? 'max-h-[8000px]' : maxHeight} ${cardStyle} overflow-hidden transition-all duration-500 p-8 mt-8` }>
                    { assetData.map((asset: any) => (
                        <div key={ asset.id }>
                            <AssetCard assetData={ asset } />
                        </div>
                    )) }
                </div>
                { assetData.length > initialNumberOfAssets && (
                    <ExpandButton
                        expanded={ expanded }
                        onExpand={ showMore }
                        onCollapse={ showLess }
                    />
                ) }
            </div>
            <ScrollDownButton href={ `#${nextSection}` } />
        </section>
    );
};

export default GenericSection;
