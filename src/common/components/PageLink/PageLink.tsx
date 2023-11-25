// @Components
import Typography from '@commonComponents/Typography/Typography';

// @Styles
import { PortfolioLink } from '@styles/Styles';
import { UrlContainer, ProjectLinkIcon } from './PageLink.styles';

type PageLinkProps = {
  name: string;
  url: string;
};

const PageLink = ({ name, url }: PageLinkProps) => {
  return (
    <PortfolioLink to={url} target="_blank">
      <UrlContainer>
        <ProjectLinkIcon />
        <Typography variant="body2" color="primary" margin="0 1">
          {name}
        </Typography>
      </UrlContainer>
    </PortfolioLink>
  );
};

export default PageLink;
