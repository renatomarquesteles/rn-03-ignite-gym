import { Heading, ScrollView, Text, XStack, YStack } from 'tamagui';
import { LogOut } from '@tamagui/lucide-icons';

import { UserPFP } from '@components/UserPFP';
import { Group } from '@components/Group';
import { useState } from 'react';

export function Home() {
  const groups = ['chest', 'legs', 'back', 'arms', 'shoulders'];
  const [groupSelected, setGroupSelected] = useState('chest');

  return (
    <YStack>
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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 40 }}
      >
        {groups.map((group) => (
          <Group
            key={group}
            name={group}
            isActive={groupSelected === group}
            onPress={() => setGroupSelected(group)}
          />
        ))}
      </ScrollView>
    </YStack>
  );
}
