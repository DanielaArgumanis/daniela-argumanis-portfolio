import React, { useState } from 'react';

// @Styles
import { StyledCard } from './Card.styles';

type CardProps = {
  children: React.ReactNode;
  noPadding?: boolean;
  isInteractive?: boolean;
  noAnimation?: boolean;
  onClick?: () => void;
  direction?: 'row' | 'column';
};

const Card = ({
  children,
  noPadding,
  isInteractive,
  noAnimation,
  onClick,
  direction = 'row',
}: CardProps) => {
  const [animationFinished, setAnimationFinished] = useState(
    noAnimation || false,
  );

  const onAnimationEnd = () => {
    setAnimationFinished(true);
  };

  return (
    <StyledCard
      animationFinished={animationFinished}
      onAnimationEnd={onAnimationEnd}
      noPadding={noPadding}
      isInteractive={isInteractive}
      onClick={onClick}
      direction={direction}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
