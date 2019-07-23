import * as styledComponents from 'styled-components';

export interface BreakPoints  {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export interface ThemeInterface {
  lightGrey: string;
  black: string;
  white: string;
  primaryColor: string;
  secondaryColor: string;
  spacing: number;
  breakpoints: BreakPoints;
}

export const theme = {
  lightGrey: '#999999',
  white: '#ffffff',
  black: '#000000',
  primaryColor: '#F92672',
  secondaryColor: '#66D9EF',
  spacing: 15,

  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};
export interface MediaQueries  {xl: string; lg: string; md: string; sm: string; xs: string}

const media: MediaQueries = {xl: '', lg: '', md: '', sm: '', xs: ''};
Object.keys(theme.breakpoints).forEach(key => {
  media[key] = `@media (min-width:  ${theme.breakpoints[key]}px)`;
});

export default styled;
export {css, createGlobalStyle, keyframes, ThemeProvider, media};
