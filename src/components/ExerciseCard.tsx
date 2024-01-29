import { ChevronRight } from '@tamagui/lucide-icons';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Heading, Image, Text, XStack, YStack, styled } from 'tamagui';

type Props = TouchableOpacityProps & {
  title: string;
};

const PressableCard = styled(TouchableOpacity);

export function ExerciseCard({ title, ...rest }: Props) {
  return (
    <PressableCard
      bc="$gray500"
      p="$2"
      pr="$4"
      borderRadius={8}
      pressStyle={{ bc: '$gray600', borderColor: '$green500' }}
      {...rest}
    >
      <XStack ai="center">
        <Image
          source={{
            uri: 'https://fortissima.com.br/wp-content/uploads/2015/08/supino-reto-tt-width-640-height-420-bgcolor-FFFFFF.jpg',
          }}
          w="$16"
          h="$16"
          borderRadius={6}
          mr="$4"
          resizeMode="cover"
        />
        <YStack f={1}>
          <Heading fontSize="$lg" color="$white">
            {title}
          </Heading>
          <Text fontSize="$sm" color="$gray200" mt="$1" numberOfLines={2}>
            3x sets of 12 repetitions
          </Text>
        </YStack>

        <ChevronRight color="$gray300" />
      </XStack>
    </PressableCard>
  );
}
