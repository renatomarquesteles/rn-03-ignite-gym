import { Heading, Image, ScrollView, Text, View, YStack } from 'tamagui';

import backgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignIn() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <YStack f={1} px="$10" pb="$16">
        <Image
          source={backgroundImg}
          resizeMode="contain"
          position="absolute"
        />
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

          <Button title="Login" />
        </View>

        <View ai="center" mt="$24">
          <Text color="$gray100" fontSize="$sm" mb="$3">
            Don't have access yet?
          </Text>
          <Button title="Create account" variant="outlined" />
        </View>
      </YStack>
    </ScrollView>
  );
}
