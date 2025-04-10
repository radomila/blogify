import { AboutSectionType } from '@/components/Components/AboutSection/aboutSectionType';
import { Heading } from '@radix-ui/themes';
import { clsx } from 'clsx';

interface Props {
  section: AboutSectionType;
}

const AboutSection = ({ section }: Props) => {
  const { title, description, imageAlign } = section;
  return (
    <div className={clsx(imageAlign === 'left' && 'md:flex-row-reverse', 'flex flex-col md:flex-row items-start gap-10')}>
      <div className="flex flex-col gap-2 flex-1 text-justify">
        <Heading
          as="h2"
          size="5"
        >
          {title}
        </Heading>
        <p>{description}</p>
      </div>

      <img
        src={section.img}
        alt={section.title}
        className="flex-1 md:w-30 border border-[#57595B]"
      />
    </div>
  );
};

export default AboutSection;
