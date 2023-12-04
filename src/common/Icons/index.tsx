export { default as CodeIcon } from './code-icon.svg?react';
export { default as GamingIcon } from './gaming-icon.svg?react';
export { default as GithubIcon } from './github-icon.svg?react';
export { default as LinkedinIcon } from './linkedin-icon.svg?react';
export { default as LinkIcon } from './link-icon.svg?react';
export { default as MailIcon } from './mail-icon.svg?react';
export { default as MoonIcon } from './moon-icon.svg?react';
export { default as ReactIcon } from './react-icon.svg?react';
export { default as StudyIcon } from './study-icon.svg?react';
export { default as SunIcon } from './sun-icon.svg?react';

import styled from '@emotion/styled';
import { PaletteType } from '@theme/Theme.types';

const SVGIconWrapper = styled.div<{
  fill?: keyof PaletteType;
  size?: string;
  stroke?: keyof PaletteType;
}>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};

  svg {
    * {
      fill: ${({ fill, theme }) => fill && theme.palette[fill]};
      stroke: ${({ stroke, theme }) => stroke && theme.palette[stroke]};
    }
  }
`;

type SVGIconProps = {
  icon: React.FunctionComponent;
  size?: string;
  fill?: keyof PaletteType;
  stroke?: keyof PaletteType;
};

const SVGIcon: React.FC<SVGIconProps> = ({ icon: Icon, ...rest }) => {
  return (
    <SVGIconWrapper {...rest}>
      <Icon />
    </SVGIconWrapper>
  );
};

export default SVGIcon;
