// @Types
import { PaletteType } from './Theme.types';

export const accentColors = ['#8464CC', '#54BCCC', '#CC5DA9'];

export const palette: Record<'light' | 'dark', PaletteType> = {
  dark: {
    background: '#1E1E1E',
    secondaryBackground: '#1E1E1E',
    primary: '#fff',
    secondary: '#A1A1AA',
    disabled: '#b5b3b3',
    accent: accentColors[0],
  },
  light: {
    background: '#F3F6F9',
    secondaryBackground: '#FFFFFF',
    disabled: '#b5b3b3',
    secondary: '#475569',
    primary: '#10172A',
    accent: accentColors[0],
  },
};
