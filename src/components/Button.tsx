import { Button as TamaguiButton, ButtonProps, Text } from 'tamagui';

type Props = ButtonProps & {
  title: string;
};

export function Button({ title, variant, ...rest }: Props) {
  return (
    <TamaguiButton
      w="$full"
      h="$14"
      bg={variant === 'outlined' ? 'transparent' : '$green700'}
      borderWidth={variant === 'outlined' ? 1 : 0}
      borderColor="$green500"
      borderRadius={6}
      pressStyle={
        variant === 'outlined'
          ? { bc: '$gray500', borderColor: '$green500' }
          : { bc: '$green500' }
      }
      {...rest}
    >
      <Text
        color={variant === 'outlined' ? '$green500' : '$white'}
        fontFamily="$robotoBold"
        fontSize="$sm"
      >
        {title}
      </Text>
    </TamaguiButton>
  );
}
