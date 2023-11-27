import { keyframes } from '@emotion/react';

// @Types
import { AnimationsType } from './Theme.types';

export const animations: AnimationsType = {
  enterCards: keyframes`
    0% {
      transform: translateY(-1500px);
      z-index: 10;
    }
    100% {
      transform: translateY(0);
      z-index: 10;
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
