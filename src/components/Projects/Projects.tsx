// @Components
import ProjectItem from './ProjectItem';

// @Gifs
import QRGeneratorGif from '@images/QRGenerator.gif';
import ProjectGif from '@images/project-gif.gif';
import ActionClaimsGif from '@images/action-claims.gif';
import CocktailDexGif from '@images/CocktailDex.gif';

// @Styles
import { CardContainer } from '@commonComponents/Card/Card.styles';

const PROJECTS_LIST = [
  {
    title: 'QRGenerator',
    description:
      'Chrome extension that allows you to generate and customize QR codes for your business.',
    technologies: ['React', 'Emotion', 'Vite'],
    image: QRGeneratorGif,
    urls: [
      {
        name: 'Chrome Store',
        url: 'https://chromewebstore.google.com/detail/qr-generator/iopnmogmnkjlcndnpabhgaljdlknadbe?hl=es',
      },
      {
        name: 'Github',
        url: 'https://github.com/eduardodediosp96/QRGenerator',
      },
    ],
    position: 'right',
  },
  {
    title: 'CocktailDex',
    description:
      'A web app inspired on the pokedex to list my favorite cocktail recipes.',
    technologies: ['React', 'MUI', 'Firebase'],
    image: CocktailDexGif,
    urls: [
      {
        name: 'CocktailDex',
        url: 'https://cocktaildex.onrender.com/',
      },
      {
        name: 'Github',
        url: 'https://github.com/DanielaArgumanis/cocktail-dex',
      },
    ],
    position: 'left',
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
