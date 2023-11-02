import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

type TypographyProps = {
    variant: string;
}

const TypographyStyles = ({ variant }: TypographyProps) => {
    const theme = useTheme();
  
    return {margin: theme.spacing(1), ...theme.typography[variant]};
};

const Typography = styled('span')(TypographyStyles);

export default Typography;