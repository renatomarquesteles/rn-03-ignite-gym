import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { View, getTokenValue } from 'tamagui';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const navigationTheme = DefaultTheme;
  const backgroundColor = getTokenValue('$color.gray700');
  navigationTheme.colors.background = backgroundColor;

  return (
    <View f={1} bc="$gray700">
      <NavigationContainer theme={navigationTheme}>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
