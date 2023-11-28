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
    accents: ['#8C65EB', '#6AC0EB', '#6A97EB', '#8C65EB'],
  },
  light: {
    background: `url(${BackgroundLight})`,
    secondaryBackground: '#FFFFFF',
    disabled: '#b5b3b3',
    secondary: '#5d5d5d',
    primary: '#20222C',
    accent: '#fff',
    accents: ['#FB757E', '#7092BE', '#8085B3', '#FB757E'],
  },
};
