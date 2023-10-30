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