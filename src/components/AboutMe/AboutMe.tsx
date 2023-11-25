// @Components
import AboutMeCard from './AboutMeCard';
import { CardContainer } from '@styles/Styles';

// @Icons
import SVGIcon, { CodeIcon, GamingIcon, ReactIcon, StudyIcon } from '@icons';

// @Images
import ArequipaPhoto from '@images/about-me-arequipa.jpg';
import DogPhoto from '@images/about-me-dog.jpg';
import IcaPhoto from '@images/about-me-ica.jpg';

// @Styles
import { AboutMeContainer, AboutMeImg } from './AboutMe.styles';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeImg src={DogPhoto} />
      <AboutMeCard
        icon={<SVGIcon icon={ReactIcon} fill="accent" />}
        description={[
          'Experience: 5 years',
          'Libraries / frameworks: React, Angular',
          'Languages: Javascript, Typescript',
        ]}
        title="Front-end"
      />
      <AboutMeImg src={IcaPhoto} />
      <AboutMeCard
        icon={<SVGIcon icon={CodeIcon} stroke="accent" />}
        description="Redux, React Query, GraphQL, Storybook, Material UI, Jest, React Testing Library, Github, Azure, Jira, SonarQube"
        title="Tech Stack"
      />
      <AboutMeImg src={ArequipaPhoto} />
      <AboutMeCard
        icon={<SVGIcon icon={GamingIcon} stroke="accent" />}
        description="I enjoy bartending as a hobbie and gaming in my free time. I also like exploring new destinations within Peru and abroad. And let's not forget my dog – she's a big part of my life!"
        title="Interests"
      />
      <AboutMeCard
        icon={<SVGIcon icon={StudyIcon} fill="accent" stroke="background" />}
        description={[
          'I began my studies in mechanical engineering in 2014 but soon discovered my passion for programming, so I switched to software engineering in 2016. I quickly started learning the fundamentals of front-end and proceeded to master Angular and React.',
          'Currently, I’m mainly working with React and Typescript, and during my free time, I’m exploring the exciting world of animations and SVG transformations.',
        ]}
        title="My Story"
      />
    </AboutMeContainer>
  );
};

export default AboutMe;
