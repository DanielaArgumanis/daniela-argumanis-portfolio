// @Components
import Typography from '@commonComponents/Typography/Typography';

// @Styles
import {
  Pill,
  PillContainer,
  ProjectCard,
  ProjectCardDescription,
  ProjectLinkIcon,
  ProjectTitle,
  UrlContainer,
} from './Projects.styles';
import { PortfolioLink } from '@styles/Styles';

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
      <div>
        <ProjectCard reverse={reverse} noPadding isInteractive>
          <img src={image} />
          <ProjectCardDescription>
            <ProjectTitle variant="title3">{title}</ProjectTitle>
            <Typography variant="body2" as="p">
              {description}
            </Typography>
            {urls.map((url) => (
              <PortfolioLink to={url.url} target="_blank">
                <UrlContainer>
                  <ProjectLinkIcon />
                  <Typography variant="body2" color="primary" margin="0 1">
                    {url.name}
                  </Typography>
                </UrlContainer>
              </PortfolioLink>
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
      </div>
    </PortfolioLink>
  );
};

export default ProjectItem;
