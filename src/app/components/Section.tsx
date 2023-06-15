import GenericSection, { GenericSectionProps } from '../subComponents/GenericSection';
import { useRef } from 'react';

type SectionProps<T> = GenericSectionProps<T> & {
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const Section = <T, >({ setExpanded, ...props }: SectionProps<T>) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div ref={ ref }>
            <GenericSection<T>
                { ...props }
                showLess={ () => {
                    setTimeout(() => {
                        setExpanded(false);
                    }, 150);
                    ref.current && ref.current.scrollIntoView({ behavior: 'smooth' });
                } }
                showMore={ () => {
                    setExpanded(true);
                } }
            />
        </div>
    );
};

export default Section;