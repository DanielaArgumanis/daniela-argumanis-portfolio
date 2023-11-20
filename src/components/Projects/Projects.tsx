// @Components
import ProjectItem from './ProjectItem';

// @Gifs
import ProjectGif from '@images/project-gif.gif';

// @Styles
import { ProjectsContainer } from './Projects.styles';

const PROJECTS_LIST = [
  {
    order: 0,
    title: 'Air bnb',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
    technologies: ['React', 'Redux', 'Storybook'],
    image: ProjectGif,
    url: '',
  },
  {
    order: 1,
    title: 'Air bnb',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
    technologies: ['React', 'Redux', 'Storybook'],
    image: ProjectGif,
    url: '',
  },
] as const;

const Projects = () => {
  return (
    <ProjectsContainer>
      {PROJECTS_LIST.map((project, idx) => (
        <ProjectItem key={project.order} {...project} reverse={idx % 2 === 0} />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
