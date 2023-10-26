import '@emotion/react';

import {
  FontSizesType,
    PaletteType,
    SpacingType
 } from './Theme.types';

declare module '@emotion/react' {
  export interface Theme {
    fontSizes: FontSizesType;
    palette: PaletteType;
    spacing: SpacingType;
  }
}
