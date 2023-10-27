export type FontSizes = {
  xsmall: string,
  small: string,
  medium: string,
  standard: string,
  large: string,
  xlarge: string,
  xxlarge: string,
};

export type PaletteType = {
  background: string,
  disabled: string,
  contrastText: string,
  dark: string,
  white: string,
  accents: string[],
  text: string
};

export type SpacingType = (value: number) => string;