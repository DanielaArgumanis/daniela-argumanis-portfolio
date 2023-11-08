import '@emotion/react';

import {
  BreakpointsType,
  PaletteType,
  SizingType,
  SpacingType,
  TypographyType,
} from './Theme.types';

declare module '@emotion/react' {
  export interface Theme {
    typography: TypographyType;
    palette: PaletteType;
    spacing: SpacingType;
    sizing: SizingType;
    breakpoints: BreakpointsType;
  }
}
