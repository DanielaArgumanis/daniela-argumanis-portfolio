// @Components
import ProjectItem from './ProjectItem';

// @Gifs
import QRGeneratorGit from '@images/QRGenerator.gif';
import ProjectGif from '@images/project-gif.gif';
import ActionClaimsGif from '@images/action-claims.gif';

// @Styles
import { CardContainer } from '@commonComponents/Card/Card.styles';

const PROJECTS_LIST = [
  {
    title: 'QRGenerator',
    description:
      'Chrome extension that allows you to generate and customize QR codes for your business.',
    technologies: ['React', 'Emotion', 'Vite'],
    image: QRGeneratorGit,
    urls: [
      {
        name: 'Github',
        url: 'https://github.com/eduardodediosp96/QRGenerator',
      },
    ],
    position: 'right',
  },
  {
    title: 'Action Claims',
    description:
      'Landing page for a company that offers house insurance services.',
    technologies: ['React', 'webpack', 'styled-components'],
    image: ActionClaimsGif,
    urls: [{ name: 'Action Claims', url: 'https://actionclaimspa.com/' }],
    position: 'center',
  },
  {
    title: 'My Portfolio',
    description: 'This website! I built it to showcase my projects and skills.',
    technologies: ['React', 'Emotion', 'Vite', 'react-router-dom'],
    image: ProjectGif,
    urls: [
      {
        name: 'Github',
        url: 'https://github.com/DanielaArgumanis/daniela-argumanis-portfolio',
      },
    ],
    position: 'center',
  },
] as const;

const Projects = () => {
  return (
    <CardContainer>
      {PROJECTS_LIST.map((project) => (
        <ProjectItem key={project.title} {...project} urls={project.urls} />
      ))}
    </CardContainer>
  );
};

export default Projects;
