import React from 'react';

// @Components
import Card from '@commonComponents/Card/Card';
import Typography from '@commonComponents/Typography/Typography';

// @Styles
import { AboutMeTitleContainer } from './AboutMe.styles';

type AboutMeCardProps = {
  icon: React.ReactNode;
  description: string | string[];
  title: string;
};

const AboutMeCard = ({ icon, description, title }: AboutMeCardProps) => {
  const isDescriptionArray = Array.isArray(description);

  return (
    <Card direction="column">
      <AboutMeTitleContainer>
        {icon}
        <Typography variant="label">{title}</Typography>
      </AboutMeTitleContainer>
      {isDescriptionArray ? (
        description.map((text, idx) => (
          <Typography key={idx} variant="body2" margin="1 0 0 0">
            {text}
          </Typography>
        ))
      ) : (
        <Typography variant="body2">{description}</Typography>
      )}
    </Card>
  );
};

export default AboutMeCard;
