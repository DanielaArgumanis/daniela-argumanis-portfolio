// @Styles
import { ProjectLink, ProjectLinkIcon } from './PageLink.styles';

type PageLinkProps = {
  name: string;
  url: string;
};

const PageLink = ({ name, url }: PageLinkProps) => {
  const handleOpenProject = () => {
    window.open(url, '_blank');
  };

  return (
    <ProjectLink
      variant="body2"
      color="primary"
      margin="0 1"
      onClick={handleOpenProject}
      as="h6"
    >
      <ProjectLinkIcon />
      {name}
    </ProjectLink>
  );
};

export default PageLink;
