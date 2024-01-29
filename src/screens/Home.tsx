import { useState } from 'react';
import { FlatList } from 'react-native';
import { Heading, ScrollView, Text, View, XStack, YStack } from 'tamagui';
import { LogOut } from '@tamagui/lucide-icons';

import { UserPFP } from '@components/UserPFP';
import { Group } from '@components/Group';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home() {
  const groups = ['chest', 'legs', 'back', 'arms', 'shoulders'];
  const exercises = [
    'Bench press',
    'Incline press',
    'Fly',
    'Pushup',
    'Chest dips',
  ];
  const [groupSelected, setGroupSelected] = useState('chest');

  return (
    <YStack f={1}>
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
        maxHeight={120}
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

      <YStack f={1} px="$8">
        <XStack jc="space-between" mb="$5">
          <Heading color="$gray200" fontSize="$md">
            Exercises
          </Heading>
          <Text color="$gray200" fontSize="$sm">
            {exercises.length}
          </Text>
        </XStack>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard key={item} title={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
            gap: 12,
          }}
        />
      </YStack>
    </YStack>
  );
}
