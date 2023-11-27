// @Types
import { PaletteType } from './Theme.types';

import BackgroundDark from '@images/background-dark.jpg';
import BackgroundLight from '@images/background-light-2.jpg';

export const accentColors = ['rgb(14, 31, 61)', '#5096e8', '#5096e8'];

export const palette: Record<'light' | 'dark', PaletteType> = {
  dark: {
    background: `url(${BackgroundDark})`,
    secondaryBackground: '#1E1E1E',
    primary: '#fff',
    secondary: '#d7d7e2',
    disabled: '#b5b3b3',
    accent: '#fff',
    accents: ['#A6D6F5', '#9693F5', '#A6D6F5'],
  },
  light: {
    background: `url(${BackgroundLight})`,
    secondaryBackground: '#FFFFFF',
    disabled: '#b5b3b3',
    secondary: '#717171',
    primary: '#20222C',
    accent: '#fff',
    accents: ['#000', '#000', '#000 '],
  },
};
