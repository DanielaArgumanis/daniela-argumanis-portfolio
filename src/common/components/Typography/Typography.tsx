import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

type TypographyProps = {
  accent?: boolean;
  margin?: string;
  variant: string;
};

const TypographyStyles = ({ accent, margin, variant }: TypographyProps) => {
  const theme = useTheme();

  const marginList = margin?.split(' ').reduce((prev, marginValue) => {
    return `${prev} ${theme.spacing(parseInt(marginValue))}`;
  }, '');

  return {
    margin: margin ? marginList : theme.spacing(1),
    ...theme.typography[variant],
    ...(accent && { color: theme.palette.accent }),
  };
};

const Typography = styled('span')(TypographyStyles);

export default Typography;