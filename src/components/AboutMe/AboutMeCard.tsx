import React from 'react';

// @Components
import Typography from '@commonComponents/Typography/Typography';

// @Styles
import { AboutMeCardContainer, AboutMeTitleContainer } from './AboutMe.styles';

type AboutMeCardProps = {
  icon: React.ReactNode;
  description: string | string[];
  title: string;
};

const AboutMeCard = ({ icon, description, title }: AboutMeCardProps) => {
  const isDescriptionArray = Array.isArray(description);

  return (
    <AboutMeCardContainer>
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
    </AboutMeCardContainer>
  );
};

export default AboutMeCard;
