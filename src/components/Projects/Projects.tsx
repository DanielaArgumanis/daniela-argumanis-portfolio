// @Components
import ProjectItem from './ProjectItem';

// @Gifs
import ProjectGif from '@images/project-gif.gif';

// @Styles
import { ProjectsContainer } from './Projects.styles';

const PROJECTS_LIST = [
  {
    order: 0,
    title: 'QRGenerator',
    description:
      'This is a chrome extension that allows you to generate and customize QR codes for your business.',
    technologies: ['React', 'Emotion', 'Vite'],
    image: ProjectGif,
    urls: [
      { name: 'Github', url: 'https://github.com/' },
      { name: 'Extension Store', url: 'https://chromewebstore.google.com' },
    ],
  },
  {
    order: 1,
    title: 'Air bnb',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
    technologies: ['React', 'Redux', 'Storybook'],
    image: ProjectGif,
    urls: [{ name: 'Github', url: 'github.com' }],
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
