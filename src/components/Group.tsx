import { Button, ButtonProps, Text } from 'tamagui';

type Props = ButtonProps & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Button
      mr="$3"
      w="$24"
      h="$10"
      bc="$gray600"
      borderColor={isActive ? '$green500' : '$gray600'}
      borderRadius="$4"
      color={isActive ? '$green500' : '$gray200'}
      fontSize="$xs"
      fontFamily="$robotoBold"
      textProps={{ textTransform: 'uppercase' }}
      pressStyle={{ bc: '$gray600', borderColor: '$green500' }}
      {...rest}
    >
      {name}
    </Button>
  );
}
