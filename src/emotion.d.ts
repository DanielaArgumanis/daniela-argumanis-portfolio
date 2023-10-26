import '@emotion/react';

import {
    PaletteType
 } from './common/Theme/Theme.types';

declare module '@emotion/react' {
  export interface Theme {
    palette: PaletteType;
  }
}
