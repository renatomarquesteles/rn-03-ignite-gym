import { Heading, Text, XStack, YStack } from 'tamagui';
import { LogOut } from '@tamagui/lucide-icons';

import { UserPFP } from '@components/UserPFP';

export function Home() {
  return (
    <XStack bc="$gray600" pt="$16" pb="$5" px="$8" ai="center">
      <UserPFP
        source={{ uri: 'https://github.com/renatomarquesteles.png' }}
        size={16}
        mr="$4"
      />

      <YStack f={1}>
        <Text color="$gray100" fontSize="$md">
          Olá,
        </Text>
        <Heading color="$gray100" fontSize="$md">
          Renato
        </Heading>
      </YStack>

      <LogOut color="$gray200" size="$7" />
    </XStack>
  );
}
