import { Heading, Image, Text, View, YStack } from 'tamagui';

import backgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

export function SignIn() {
  return (
    <YStack f={1} bg="$gray700">
      <Image source={backgroundImg} resizeMode="contain" position="absolute" />
      <View ai="center" my={94}>
        <LogoSvg />
        <Text color="$gray100" fontSize="$sm">
          Train your body and your mind.
        </Text>
      </View>

      <View ai="center">
        <Heading color="$gray100" fontSize="$xl" mb={100}>
          Access your account
        </Heading>
      </View>
    </YStack>
  );
}
