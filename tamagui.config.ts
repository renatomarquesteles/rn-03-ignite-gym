import { config } from '@tamagui/config/v2-native';
import { createFont, createTamagui, createTokens } from 'tamagui';

const robotoFont = createFont({
  family: 'Roboto, sans-serif',
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  },
  lineHeight: {
    xs: 19.2,
    sm: 22.4,
    md: 25.6,
    lg: 28.8,
    xl: 38.4,
  },
  weight: {
    regular: '400',
    bold: '700',
  },
  letterSpacing: {
    1: 0,
    2: -1,
  },
  // (native only) swaps out fonts by face/style
  face: {
    400: { normal: 'Roboto' },
    700: { normal: 'Roboto' },
  },
});

export const tokens = createTokens({
  ...config.tokens,
  color: {
    green500: '#00b37e',
    green700: '#00875f',
    white: '#ffffff',
    gray100: '#e1e1e6',
    gray200: '#c4c4cc',
    gray300: '#7c7c8a',
    gray400: '#323238',
    gray500: '#29292e',
    gray600: '#202024',
    gray700: '#121214',
    red500: '#f75a68',
  },
});

const appConfig = createTamagui({
  ...config,
  fonts: {
    heading: robotoFont,
    body: robotoFont,
    roboto: robotoFont,
  },
  tokens,
});

export type AppConfig = typeof appConfig;

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
