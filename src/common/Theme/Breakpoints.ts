import { Breakpoint, BreakpointsType } from "./Theme.types";

const breakpointValues = {
  mobileS: 320,
  mobileL: 426,
  tabletS: 550,
  tablet: 768,
  laptopS: 1024,
  laptopXL: 2560,
};

export const breakpoints: BreakpointsType = {
    values: breakpointValues,
    up: (breakpoint: string) => {
        return `@media (min-width:${breakpointValues[breakpoint as Breakpoint]}px)`;
    },
    down: (breakpoint: string) => {
        return `@media (max-width:${breakpointValues[breakpoint as Breakpoint]}px)`;
    },
    between: (start: string, end: string) => {
        return `@media (min-width:${
        breakpointValues[start as Breakpoint]
        }px) and (max-width:${breakpointValues[end as Breakpoint]}px)`;
    },
};
