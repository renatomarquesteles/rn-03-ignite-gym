import { Image, YStack } from 'tamagui';

import backgroundImg from '@assets/background.png';

export function SignIn() {
  return (
    <YStack f={1} bg="$gray700">
      <Image source={backgroundImg} resizeMode="contain" position="absolute" />
    </YStack>
  );
}
