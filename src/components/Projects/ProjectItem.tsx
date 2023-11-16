// @Components
import Typography from '../../common/components/Typography/Typography';

// @Styles
import {
  Pill,
  PillContainer,
  ProjectCard,
  ProjectTitle,
} from './Projects.styles';

type ProjectItemProps = {
  title: string;
  description: string;
  technologies: readonly string[];
  image: string;
  url: string;
  reverse?: boolean;
};

const ProjectItem = ({
  title,
  description,
  technologies,
  reverse,
  image,
  url,
}: ProjectItemProps) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <ProjectCard onClick={handleClick} reverse={reverse}>
      <img src={image} />
      <div>
        <div>
          <ProjectTitle variant="title3">{title}</ProjectTitle>
          <Typography variant="body2" as="p" margin="16px 0px">
            {description}
          </Typography>
        </div>
        <PillContainer>
          {technologies.map((technology) => (
            <Pill>
              <Typography variant="body3">{technology}</Typography>
            </Pill>
          ))}
        </PillContainer>
      </div>
    </ProjectCard>
  );
};

export default ProjectItem;
