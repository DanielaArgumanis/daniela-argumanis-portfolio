import { keyframes } from '@emotion/react';
import { AnimationsType } from './Theme.types';

export const animations: AnimationsType = {
  enterCards: keyframes`
    0% {
      transform: translateX(2000px) scale(1);
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
    transform: scale(1.3);
  }
  `,
};
