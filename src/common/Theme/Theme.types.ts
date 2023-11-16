export type PaletteType = {
  background: string;
  disabled: string;
  contrastText: string;
  dark: string;
  white: string;
  accents: string;
  text: string;
};

export type SizingType = {
  navbar: string;
  navbarMobile: string;
  footer: string;
  footerMobile: string;
};

export type TypographyType = {
  [key: string]: {
    fontSize: string;
    fontWeight?: number;
  };
};

export type SpacingType = (value: number) => string;

export enum Breakpoint {
  mobileS = 'mobileS',
  mobileL = 'mobileL',
  tabletS = 'tabletS',
  tablet = 'tablet',
  laptopS = 'laptopS',
  laptopXL = 'laptopXL',
}

export type BreakpointsType = {
  values: Record<Breakpoint, number>;
  up: (breakpoint: Breakpoint) => string;
  down: (breakpoint: Breakpoint) => string;
  between: (start: Breakpoint, end: Breakpoint) => string;
};

export type ThemeType = {
  breakpoints: BreakpointsType;
  palette: PaletteType;
  typography: TypographyType;
  sizing: SizingType;
  spacing: SpacingType;
};
