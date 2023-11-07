// @Theme
import { breakpoints } from "./Breakpoints";
import { accentColors, palette } from './Palette';
import { spacing } from './Spacing';
import { typography } from './Typography.styles';

// @Types
import { ThemeType } from './Theme.types';

const theme: ThemeType = {
  breakpoints,
  palette,
  typography,
  spacing,
};

const getTheme = (routeOrder: number) => {
  return {
    ...theme,
    palette: {
      ...theme.palette,
      accents: accentColors[routeOrder % 3],
    },
  };
};

export default getTheme;
