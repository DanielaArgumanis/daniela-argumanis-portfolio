export type PaletteType = {
  background: string,
  disabled: string,
  contrastText: string,
  dark: string,
  white: string,
  accents: string[],
  text: string
};

export type TypographyType = {[key: string]: {
  fontSize: string,
  fontWeight?: number,
}}

export type SpacingType = (value: number) => string;

export enum Breakpoint {
  mobileS = 'mobileS',
  mobileL = 'mobileL',
  tablet = 'tablet',
  laptopS = 'laptopS',
  laptopXL = 'laptopXL',
}

export type BreakpointsType = {
  values: Record<Breakpoint, number>;
  up: (breakpoint: string) => string;
  down: (breakpoint: string) => string;
  between: (start: string, end: string) => string;
};

export type ThemeType = {
  breakpoints: BreakpointsType,
  palette: PaletteType,
  typography: TypographyType,
  spacing: SpacingType,
}
