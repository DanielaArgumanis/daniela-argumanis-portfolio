// @Components
import { PortfolioLink } from '../../common/Styles/Styles';
import Typography from '../../common/components/Typography/Typography';

// @Styles
import {
  Pill,
  PillContainer,
  ProjectCard,
  ProjectCardDescription,
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
  return (
    <PortfolioLink to={url} target="_blank">
      <ProjectCard reverse={reverse} noPadding>
        <img src={image} />
        <ProjectCardDescription>
          <ProjectTitle variant="title3">{title}</ProjectTitle>
          <Typography variant="body2" as="p" margin="2 0">
            {description}
          </Typography>
          <PillContainer>
            {technologies.map((technology) => (
              <Pill key={technology}>
                <Typography variant="smallLabel">{technology}</Typography>
              </Pill>
            ))}
          </PillContainer>
        </ProjectCardDescription>
      </ProjectCard>
    </PortfolioLink>
  );
};

export default ProjectItem;
