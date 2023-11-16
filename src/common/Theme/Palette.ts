import { PaletteType } from "./Theme.types";

export const accentColors = ['#8464CC', '#54BCCC', '#CC5DA9'];

export const palette: Record<'light' | 'dark', PaletteType> = {
  dark: {
    background: '#1E1E1E',
    disabled: '#b5b3b3',
    contrastText: '#141618',
    text: '#A1A1AA',
    white: '#fff',
    dark: '#000',
    accents: accentColors[0],
  },
  light: {
    background: '#fff',
    disabled: '#b5b3b3',
    contrastText: '#141618',
    text: '#60646C',
    white: '#1E1E1E',
    dark: '#fff',
    accents: accentColors[0],
  },
};
