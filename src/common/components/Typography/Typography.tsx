import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { PaletteType } from '@theme/Theme.types';

type TypographyProps = {
  accent?: boolean;
  color?: keyof PaletteType;
  margin?: string;
  variant: string;
};

const TypographyStyles = ({
  accent,
  color,
  margin,
  variant,
}: TypographyProps) => {
  const theme = useTheme();

  const marginList = margin?.split(' ').reduce((prev, marginValue) => {
    return `${prev} ${theme.spacing(parseInt(marginValue))}`;
  }, '');

  return {
    margin: margin ? marginList : theme.spacing(1),
    ...theme.typography[variant],
    ...(color && { color: theme.palette[color] }),
    ...(accent && { color: theme.palette.accent }),
  };
};

const Typography = styled('span')(TypographyStyles);

export default Typography;