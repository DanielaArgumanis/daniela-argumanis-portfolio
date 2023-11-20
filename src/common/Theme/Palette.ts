// @Types
import { PaletteType } from './Theme.types';

export const accentColors = ['#8464CC', '#54BCCC', '#CC5DA9'];

export const palette: Record<'light' | 'dark', PaletteType> = {
  dark: {
    background: '#1E1E1E',
    primary: '#fff',
    secondary: '#A1A1AA',
    disabled: '#b5b3b3',
    accent: accentColors[0],
  },
  light: {
    background: '#EBEAF1',
    disabled: '#b5b3b3',
    secondary: '#60646C',
    primary: '#1E1E1E',
    accent: accentColors[0],
  },
};
