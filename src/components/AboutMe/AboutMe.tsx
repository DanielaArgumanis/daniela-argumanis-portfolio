// @Components
import AboutMeCard from './AboutMeCard';
import { CardContainer } from '../../common/Styles/Styles';

// @Icons
import ReactIcon from '../../common/Icons/ReactIcon';

// @Images
import DogPhoto from '../../about-me-dog.jpg';
import ArequipaPhoto from '../../about-me-arequipa.jpg';
import IcaPhoto from '../../about-me-ica.jpg';

// @Styles
import { AboutMeContainer, AboutMeImg } from './AboutMe.styles';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <CardContainer noPadding>
        <AboutMeImg src={DogPhoto} />
      </CardContainer>
      <AboutMeCard
        icon={<ReactIcon />}
        description={[
          'Experience: 5 years',
          'Libraries / frameworks: React, Angular',
          'Languages: Javascript, Typescript',
        ]}
        title="Front-end"
      />
      <CardContainer noPadding>
        <AboutMeImg src={IcaPhoto} />
      </CardContainer>
      <AboutMeCard
        icon={<ReactIcon />}
        description="Redux, Jotai, React Query, GraphQL, Storybook, Material UI, Jest, React Testing Library, Github, Azure, Jira, SonarQube"
        title="Tech Stack"
      />
      <CardContainer noPadding>
        <AboutMeImg src={ArequipaPhoto} />
      </CardContainer>
      <AboutMeCard
        icon={<ReactIcon />}
        description="I enjoy bartending as a hobbie and gaming in my free time. I also like exploring new destinations within Peru and abroad. And let's not forget my dog – she's a big part of my life!"
        title="Interests"
      />
      <AboutMeCard
        icon={<ReactIcon />}
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
