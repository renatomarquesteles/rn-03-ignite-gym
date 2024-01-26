import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { TamaguiProvider } from 'tamagui';

import { LoadingScreen } from '@components/LoadingScreen';
import { Routes } from '@routes/index';

import tamaguiConfig from './tamagui.config';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular,
    RobotoBold: Roboto_700Bold,
  });

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <StatusBar style="light" />

      {fontsLoaded ? <Routes /> : <LoadingScreen />}
    </TamaguiProvider>
  );
}
