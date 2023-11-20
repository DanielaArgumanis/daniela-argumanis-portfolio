import { keyframes } from '@emotion/react';

// @Types
import { AnimationsType } from './Theme.types';

export const animations: AnimationsType = {
  enterCards: keyframes`
    0% {
      transform: translateX(2000px);
      opacity: 1;
    }
    100% {
      transform: none;
      opacity: 1;
    }
  `,
  hoverCard: keyframes`
  0% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: perspective(500px) translateZ(50px)
  }
  `,
};
