import GenericSection, { GenericSectionProps } from '../subComponents/GenericSection';

type SectionProps<T> = GenericSectionProps<T> & {
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const Section = <T, >({ setExpanded, ...props }: SectionProps<T>) => (
    <GenericSection<T>
        { ...props }
        showLess={ () => setExpanded(false) }
        showMore={ () => setExpanded(true) }
    />
);
export default Section;
