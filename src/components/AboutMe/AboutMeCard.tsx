import React from 'react';
import Typography from '../../common/components/Typography/Typography';
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
        description.map((text) => (
          <Typography variant="body2" margin="1 0 0 0">
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
