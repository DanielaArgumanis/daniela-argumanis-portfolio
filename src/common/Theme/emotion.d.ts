import '@emotion/react';

import {
  BreakpointsType,
    PaletteType,
    SpacingType,
    TypographyType
 } from './Theme.types';

declare module '@emotion/react' {
  export interface Theme {
    typography: TypographyType;
    palette: PaletteType;
    spacing: SpacingType;
    breakpoints: BreakpointsType;
  }
}
