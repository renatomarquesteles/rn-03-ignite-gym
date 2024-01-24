import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { TamaguiProvider, Text, View } from 'tamagui';

import { LoadingScreen } from '@components/LoadingScreen';

import tamaguiConfig from './tamagui.config';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) return <LoadingScreen />;

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <StatusBar style="light" />
      <View f={1} jc="center" ai="center" bc="$gray700">
        <Text fontFamily="$roboto" fontWeight="$bold" color="$gray1">
          Hello, world!
        </Text>
      </View>
    </TamaguiProvider>
  );
}
