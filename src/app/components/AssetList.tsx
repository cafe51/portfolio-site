import ExpandButton from '../subComponents/ExpandButton';
import ScrollDownButton from '../subComponents/ScrollDownButton';

type AssetListProps<T> = {
  tagName: string,
  assetName: string,
  assetData: T[],
  initialNumberOfAssets: number,
  AssetCard: React.FC<{ assetData: T }>,
  expanded: boolean,
  showLess: () => void,
  showMore: () => void,
  nextSection: string,
}

const AssetList = <T, >({ tagName, assetName, assetData, initialNumberOfAssets, AssetCard, expanded, showLess, showMore, nextSection }: AssetListProps<T>) => {
    return (
        <section id={ tagName } className="bg-gray-200 p-8 relative shadow-xl rounded-md">
            <div className="bg-white mx-auto p-8 rounded-xl">
                <h2 className="mb-6">{ assetName }</h2>
                <div className={ `${expanded ? 'max-h-[1000px]' : 'max-h-[160px]'} grid grid-cols-2 sm:grid-cols-4 gap-6 overflow-hidden transition-all duration-500` }>
                    { assetData.map((asset: any, index: number) => (
                        <div 
                            className={ `transition-opacity duration-500 ${expanded || index < initialNumberOfAssets ? 'opacity-100' : 'opacity-0'}` }
                            key={ asset.id }
                        >
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



export default AssetList;
