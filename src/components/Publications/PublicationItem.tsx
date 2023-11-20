// @Components
import Typography from '@commonComponents/Typography/Typography';

// @Styles
import {
  PublicationCard,
  PublicationSourceContainer,
} from './Publication.styles';
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
      <PublicationCard>
        <PublicationSourceContainer>
          <Typography variant="label">{source}</Typography>
          <Typography variant="body2">{date}</Typography>
        </PublicationSourceContainer>
        <Typography variant="title3">{title}</Typography>
        <Typography variant="body2" as="p">
          {description}
        </Typography>
      </PublicationCard>
    </PortfolioLink>
  );
};

export default PublicationItem;
