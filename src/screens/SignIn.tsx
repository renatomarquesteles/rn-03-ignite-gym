import { Heading, Image, Text, View, YStack } from 'tamagui';

import backgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';

export function SignIn() {
  return (
    <YStack f={1} bg="$gray700" px="$10">
      <Image source={backgroundImg} resizeMode="contain" position="absolute" />
      <View ai="center" my="$24">
        <LogoSvg />
        <Text color="$gray100" fontSize="$sm">
          Train your body and your mind.
        </Text>
      </View>

      <View ai="center">
        <Heading color="$gray100" fontSize="$xl" mb="$6">
          Access your account
        </Heading>

        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Password" secureTextEntry />
      </View>
    </YStack>
  );
}
