// @Components
import Typography from '@commonComponents/Typography/Typography';
import PageLink from '@commonComponents/PageLink/PageLink';
import Card from '@commonComponents/Card/Card';

// @Styles
import { PublicationSourceContainer } from './Publication.styles';
import { PortfolioLink } from '@styles/Styles';

type PublicationItemProps = {
  title: string;
  description: string;
  source: string;
  date: string;
  url: string;
};

const PublicationItem = ({
  title,
  description,
  source,
  date,
  url,
}: PublicationItemProps) => {
  return (
    <PortfolioLink to={url} target="_blank">
      <Card isInteractive direction="column">
        <PublicationSourceContainer>
          <PageLink name={source} url={url} />
          <Typography variant="label" margin="0">
            {date}
          </Typography>
        </PublicationSourceContainer>
        <Typography variant="title3">{title}</Typography>
        <Typography variant="body2" as="p">
          {description}
        </Typography>
      </Card>
    </PortfolioLink>
  );
};

export default PublicationItem;
