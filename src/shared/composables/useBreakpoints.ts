import { breakpointsAntDesign, useBreakpoints as useBreakpointsBase } from '@vueuse/core';

const breakpoints = useBreakpointsBase(breakpointsAntDesign);

export function useBreakpoints() {
  return {
    isMobile: breakpoints.smaller('lg'),
  };
}
