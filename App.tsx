import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <View style={{ flex: 1, backgroundColor: '#202024' }}>
      {fontsLoaded ? <Text>Hello world!</Text> : <View />}
      <StatusBar style="light" />
    </View>
  );
}
