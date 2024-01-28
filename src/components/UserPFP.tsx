import { Image, ImageProps } from 'tamagui';

type Props = ImageProps & {
  size: number;
};

export function UserPFP({ size, ...rest }: Props) {
  return <Image w={`$${size}`} h={`$${size}`} borderRadius={999} {...rest} />;
}
