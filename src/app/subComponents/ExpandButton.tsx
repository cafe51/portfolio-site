/* eslint-disable @typescript-eslint/no-empty-function */
interface ExpandButtonProps {
  expanded: boolean;
  onExpand?: () => void;
  onCollapse?: () => void;
}

const ExpandButton: React.FC<ExpandButtonProps> = ({ expanded, onExpand, onCollapse }) => {
    return (
        <div className="flex justify-center mt-6">
            <button
                onClick={ expanded ? onCollapse ?? (() => {}) : onExpand ?? (() => {}) }
                className="transition-all duration-500 px-4 py-2 bg-gray-800 text-white rounded-md text-lg hover:bg-gray-700 w-full sm:w-auto"
            >
                { expanded ? 'Ver menos' : 'Ver mais' }
            </button>
        </div>
    );
};

export default ExpandButton;
