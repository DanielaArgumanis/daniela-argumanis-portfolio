// @Types
import { PaletteType } from './Theme.types';

import BackgroundDark from '@images/background-dark.jpg';
import BackgroundDarkMobile from '@images/background-dark-mobile.jpg';
import BackgroundLight from '@images/background-light-2.jpg';
import BackgroundLightMobile from '@images/background-light-mobile.jpg';

export const accentColors = ['rgb(14, 31, 61)', '#5096e8', '#5096e8'];

export const palette: Record<'light' | 'dark', PaletteType> = {
  dark: {
    accent: '#fff',
    accents: ['#8C65EB', '#6AC0EB', '#6A97EB', '#8C65EB'],
    background: `url(${BackgroundDark})`,
    backgroundMobile: `url(${BackgroundDarkMobile})`,
    backgroundColor: '#070c16',
    disabled: '#b5b3b3',
    primary: '#fff',
    secondary: '#d7d7e2',
    secondaryBackground: '#1E1E1E',
  },
  light: {
    accent: '#fff',
    accents: ['#FB757E', '#7092BE', '#8085B3', '#FB757E'],
    background: `url(${BackgroundLight})`,
    backgroundMobile: `url(${BackgroundLightMobile})`,
    backgroundColor: '#fff',
    disabled: '#b5b3b3',
    primary: '#20222C',
    secondary: '#444444',
    secondaryBackground: '#FFFFFF',
  },
};
