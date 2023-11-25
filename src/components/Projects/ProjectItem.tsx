// @Components
import Typography from '@commonComponents/Typography/Typography';

// @Styles
import {
  Pill,
  PillContainer,
  ProjectCard,
  ProjectCardDescription,
  ProjectImage,
  ProjectImageContainer,
} from './Projects.styles';
import { PortfolioLink } from '@styles/Styles';
import PageLink from '@commonComponents/PageLink/PageLink';

type ProjectItemProps = {
  title: string;
  description: string;
  technologies: readonly string[];
  image: string;
  urls: readonly { name: string; url: string }[];
  reverse?: boolean;
};

const ProjectItem = ({
  title,
  description,
  technologies,
  reverse,
  image,
  urls,
}: ProjectItemProps) => {
  return (
    <PortfolioLink to={urls[0].url} target="_blank">
      <ProjectCard reverse={reverse} noPadding isInteractive>
        <ProjectImageContainer>
          <ProjectImage src={image} />
        </ProjectImageContainer>
        <ProjectCardDescription>
          <Typography variant="title3">{title}</Typography>
          <Typography variant="body2" as="p">
            {description}
          </Typography>
          {urls.map((url) => (
            <PageLink key={url.name} {...url} />
          ))}
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
