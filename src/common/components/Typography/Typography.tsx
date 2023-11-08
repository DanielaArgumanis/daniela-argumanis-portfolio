import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

type TypographyProps = {
    accent?: boolean;
    variant: string;
}

const TypographyStyles = ({ accent, variant }: TypographyProps) => {
    const theme = useTheme();
  
    return {
      margin: theme.spacing(1),
      ...theme.typography[variant],
      ...(accent && { color: theme.palette.accents }),
    };
};

const Typography = styled('span')(TypographyStyles);

export default Typography;