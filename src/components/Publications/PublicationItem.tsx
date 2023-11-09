// @Components
import Typography from '../../common/components/Typography/Typography';

// @Styles
import { PublicationCard } from './Publication.styles';

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
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <PublicationCard onClick={handleClick}>
      <div>
        <Typography variant="label">{source}</Typography>
        <Typography variant="body2">{date}</Typography>
      </div>
      <Typography variant="title3">{title}</Typography>
      <Typography variant="body2" as="p">
        {description}
      </Typography>
    </PublicationCard>
  );
};

export default PublicationItem;
