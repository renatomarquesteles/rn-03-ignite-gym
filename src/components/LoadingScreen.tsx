import { Spinner, View } from 'tamagui';

export function LoadingScreen() {
  return (
    <View f={1} jc="center" ai="center" bc="$gray700">
      <Spinner size="large" color="$green500" />
    </View>
  );
}
