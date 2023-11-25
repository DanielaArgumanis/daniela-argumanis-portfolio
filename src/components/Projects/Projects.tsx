// @Components
import ProjectItem from './ProjectItem';

// @Gifs
import QRGeneratorGit from '@images/QRGenerator.gif';
import ProjectGif from '@images/project-gif.gif';

// @Styles
import { ProjectsContainer } from './Projects.styles';

const PROJECTS_LIST = [
  {
    order: 0,
    title: 'QRGenerator',
    description:
      'Chrome extension that allows you to generate and customize QR codes for your business.',
    technologies: ['React', 'Emotion', 'Vite'],
    image: QRGeneratorGit,
    urls: [
      { name: 'Github', url: 'https://github.com/' },
      { name: 'Extension Store', url: 'https://chromewebstore.google.com' },
    ],
  },
  {
    order: 1,
    title: 'Action Claims',
    description:
      'Landing page for a company that offers house insurance services.',
    technologies: ['React', 'webpack', 'styled-components'],
    image: ProjectGif,
    urls: [{ name: 'Action Claims', url: 'https://actionclaimspa.com/' }],
  },
] as const;

const Projects = () => {
  return (
    <ProjectsContainer>
      {PROJECTS_LIST.map((project, idx) => (
        <ProjectItem
          key={project.order}
          {...project}
          reverse={idx % 2 === 0}
          urls={project.urls}
        />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
