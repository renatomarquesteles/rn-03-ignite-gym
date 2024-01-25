import { Input as TamaguiInput, InputProps } from 'tamagui';

export function Input({ ...rest }: InputProps) {
  return (
    <TamaguiInput
      w="$full"
      h="$14"
      px="$4"
      borderWidth={0}
      borderRadius={6}
      fontSize="$md"
      bc="$gray700"
      color="$white"
      mb="$4"
      placeholderTextColor="$gray300"
      focusStyle={{
        borderWidth: 1,
        borderColor: '$green500',
      }}
      {...rest}
    />
  );
}
