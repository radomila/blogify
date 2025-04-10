import AboutSection from '@/components/Components/AboutSection/AboutSection';
import { sections } from '@/app/about/sections';
import { Heading } from '@radix-ui/themes';

const About = () => {
  return (
    <div className="flex mt-10 flex-col flex-wrap mx-auto max-w-xs w-full md:max-w-3xl xl:max-w-6xl gap-10">
      <Heading
        as="h1"
        size="7"
        role="heading"
        aria-level={1}
      >
        About
      </Heading>

      {sections.map((section) => {
        return (
          <AboutSection
            key={section.title}
            section={section}
          />
        );
      })}
    </div>
  );
};

export default About;
