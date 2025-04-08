import { AboutSectionType } from '@/components/Components/AboutSection/aboutSectionType';
import { Heading } from '@radix-ui/themes';

interface Props {
  section: AboutSectionType;
}

const AboutSection = ({ section }: Props) => {
  const { title, description, imageAlign } = section;
  return (
    <div className="flex items-start gap-8">
      {imageAlign === 'left' && (
        <img
          src={section.img}
          alt={section.title}
          className="flex-1 w-30 border border-[#57595B]"
        />
      )}
      <div className="flex flex-col gap-2 flex-1 text-justify">
        <Heading
          as="h2"
          size="5"
        >
          {title}
        </Heading>
        <p>{description}</p>
      </div>
      {imageAlign === 'right' && (
        <img
          src={section.img}
          alt={section.title}
          className="flex-1 w-30 border border-[#57595B]"
        />
      )}
    </div>
  );
};

export default AboutSection;
