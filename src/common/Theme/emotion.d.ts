import '@emotion/react';

import {
    PaletteType
 } from './Theme.types';

declare module '@emotion/react' {
  export interface Theme {
    palette: PaletteType;
  }
}
